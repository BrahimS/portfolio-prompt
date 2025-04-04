import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// const metadata: Metadata = {
// 	title: 'Brahim Sourny | Portfolio',
// 	description: 'Interactive portfolio of Brahim Sourny, Frontend Developer',
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-amber-800 text-white min-h-screen`}
			>
				{children}
			</body>
		</html>
	);
}
