'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import { useChatStore } from '../../store/chatStore';

export function MessageInput() {
	const [input, setInput] = useState('');
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const { sendMessage, isProcessing } = useChatStore();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (input.trim() && !isProcessing) {
			sendMessage(input.trim());
			setInput('');
		}
	};

	// Auto-resize textarea
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.style.height = 'auto';
			inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
		}
	}, [input]);

	return (
		<div className="border-t border-primary/10 dark:border-white/10 p-4">
			<form onSubmit={handleSubmit} className="flex">
				<textarea
					ref={inputRef}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Ask me anything about Brahim..."
					className="flex-1 p-3 border border-primary/20 rounded-l-lg resize-none max-h-32 dark:bg-primary dark:border-white/20 dark:text-white"
					rows={1}
					onKeyDown={(e) => {
						if (e.key === 'Enter' && !e.shiftKey) {
							e.preventDefault();
							handleSubmit(e);
						}
					}}
				/>
				<button
					type="submit"
					disabled={!input.trim() || isProcessing}
					className="bg-gray-700 border-1 border-gray-500 text-primary px-4 rounded-r-lg disabled:opacity-50"
				>
					Send
				</button>
			</form>
			<div className="mt-2 text-xs text-primary/60 dark:text-white/60">
				Press Enter to send, Shift+Enter for new line
			</div>
		</div>
	);
}
