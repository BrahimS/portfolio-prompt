'use client';

import { useChatStore } from '../../store/chatStore';

const suggestionTopics = [
	'What skills do you have?',
	'Tell me about your work experience',
	'What projects have you worked on?',
	'How can I contact you?',
	'What frontend technologies do you use?',
];

export function Suggestions() {
	const { sendMessage } = useChatStore();

	return (
		<div className="space-y-3 w-full max-w-md">
			<h3 className="text-lg font-medium text-center mb-4 text-primary dark:text-white">Ask me about...</h3>
			<div className="grid gap-2">
				{suggestionTopics.map((topic) => (
					<button
						key={topic}
						onClick={() => sendMessage(topic)}
						className="p-3 text-left rounded-lg border border-primary/20 dark:border-white/20 hover:bg-secondary/10 dark:hover:bg-secondary/20 transition-colors text-primary dark:text-white"
					>
						{topic}
					</button>
				))}
			</div>
		</div>
	);
}
