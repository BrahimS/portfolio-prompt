import { Message as MessageType } from '../../store/chatStore';
import { Message } from './Message';
import { useEffect, useRef } from 'react';

interface MessageListProps {
	messages: MessageType[];
}

export function MessageList({ messages }: MessageListProps) {
	const messagesEndRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div className="space-y-4">
			{messages.map((message) => (
				<Message key={message.id} message={message} />
			))}
			<div ref={messagesEndRef} />
		</div>
	);
}
