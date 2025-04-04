'use client';

import { useEffect } from 'react';
import { useChatStore } from './store/chatStore';
import { Sidebar } from './components/layout/Sidebar';
import { ChatWindow } from './components/layout/ChatWindow';
import { MessageInput } from './components/layout/MessageInput';

export default function Home() {
	const { addMessage } = useChatStore();

	useEffect(() => {
		// Add welcome message on initial load
		addMessage({
			id: 'welcome',
			role: 'assistant',
			content:
				"Hi there! I'm Brahim's portfolio assistant. I can tell you about his skills, experience, and projects. What would you like to know?",
			timestamp: new Date(),
		});
	}, [addMessage]);

	return (
		<main className="flex h-screen dark:bg-gray-800 bg-primary">
			<Sidebar />
			<div className="flex flex-col flex-1 overflow-hidden">
				<ChatWindow />
				<MessageInput />
			</div>
		</main>
	);
}
