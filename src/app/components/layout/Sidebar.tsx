'use client';

import { useState } from 'react';

import { useChatStore } from '../../store/chatStore';

export function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const { clearMessages } = useChatStore();

	return (
		<>
			{/* Mobile overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Sidebar */}
			<div
				className={`fixed lg:relative z-30 w-64 h-full bg-gray-100 dark:bg-gray-800 transform transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
				}`}
			>
				<div className="flex flex-col h-full border-r-1 dark:border-gray-700">
					<div className="p-4 mb-8 border-b-0 border-gray-200 dark:border-gray-700">
						<h2 className="text-xl font-bold">Brahim Sourny</h2>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Senior Ui Developer
						</p>
					</div>

					<nav className="flex-1 p-4 space-y-1">
						<button
							onClick={() => {
								clearMessages();
								setIsOpen(false);
							}}
							className="w-full text-left p-2 rounded hover:bg-black-200 dark:hover:bg-gray-700"
						>
							New Chat
						</button>

						<a
							href="https://www.brahimsourny.dev/en"
							target="_blank"
							rel="noopener noreferrer"
							className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
						>
							View Original Website
						</a>

						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
						>
							Download Resume
						</a>
					</nav>
				</div>
			</div>

			{/* Mobile toggle button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed z-40 bottom-4 left-4 p-2 rounded-full bg-blue-600 text-white lg:hidden"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					{isOpen ? (
						<path d="M18 6L6 18M6 6l12 12" />
					) : (
						<path d="M3 12h18M3 6h18M3 18h18" />
					)}
				</svg>
			</button>
		</>
	);
}
