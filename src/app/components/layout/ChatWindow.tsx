'use client';

import { MessageList } from '../../components/chat/MessageList';
import { Suggestions } from '../chat/Suggestions';
import { useChatStore } from '../../store/chatStore';

export function ChatWindow() {
	const { messages } = useChatStore();

	return (
		<div className="flex-1 overflow-hidden flex flex-col">
			<div className="flex-1 overflow-y-auto p-4">
				{messages.length === 0 ? (
					<div className="h-full flex flex-col items-center justify-center">
						<h1 className="text-2xl font-bold mb-6 text-primary dark:text-white">
							Brahim Sourny
						</h1>
						<p className="text-lg text-center mb-8 text-primary/80 dark:text-white/80">
							Senior UI Developer
						</p>
						<Suggestions />
					</div>
				) : (
					<MessageList messages={messages} />
				)}
			</div>
		</div>
	);
}
