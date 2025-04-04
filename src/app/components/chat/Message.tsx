import { Message as MessageType } from '../../store/chatStore';
import ReactMarkdown from 'react-markdown';

interface MessageProps {
	message: MessageType;
}

export function Message({ message }: MessageProps) {
	const isUser = message.role === 'user';

	return (
		<div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
			<div
				className={`max-w-3xl rounded-lg p-4 ${
					isUser
						? 'bg-transparent text-primary'
						: 'bg-transparent dark:bg-primary text-primary dark:text-white'
				}`}
			>
				<div className="prose dark:prose-invert">
					<ReactMarkdown>{message.content}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}
