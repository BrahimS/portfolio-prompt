import { profile } from '../../lib/data/profile';
import { projects } from '../../lib/data/projects';

type Pattern = {
	keywords: string[];
	response: string | ((matches?: RegExpMatchArray) => string);
};

const patterns: Pattern[] = [
	{
		keywords: ['hello', 'hi', 'hey', 'greetings'],
		response: `Hello! I'm a virtual assistant for Brahim Sourny's portfolio. How can I help you today? You can ask about his skills, experience, projects, or anything else you'd like to know.`,
	},
	{
		keywords: ['who', 'about', 'introduce'],
		response: profile.about,
	},
	{
		keywords: ['skills', 'abilities', 'technologies', 'tech stack'],
		response: () => {
			const skillsList = profile.skills
				.map(
					(category) =>
						`**${category.category}**: ${category.items.join(', ')}`,
				)
				.join('\n\n');

			return `Here are Brahim's key skills:\n\n${skillsList}`;
		},
	},
	{
		keywords: ['experience', 'work', 'job', 'career', 'employment'],
		response: () => {
			const experienceList = profile.experience
				.map(
					(job) =>
						`**${job.role}** at **${job.company}** (${job.period})\n${job.description}`,
				)
				.join('\n\n');

			return `Here's Brahim's work experience:\n\n${experienceList}`;
		},
	},
	{
		keywords: ['projects', 'portfolio', 'work', 'created'],
		response: () => {
			const projectsList = projects
				.map(
					(project) =>
						`**${project.title}**\n\nTechnologies: ${project.technologies.join(', ')}\n\n${project.description}\n\n${project.link ? `\nlink: [${project.link}](${project.link})` : ''}\n\n`,
				)
				.join('\n\n');

			return `Here are some of Brahim's notable projects:\n\n${projectsList}`;
		},
	},
	{
		keywords: ['contact', 'email', 'reach', 'hire'],
		response: `You can contact Brahim at ${profile.email} or visit his website at https://www.brahimsourny.dev/en to get in touch.`,
	},
	{
		keywords: [
			'frontend',
			'front end',
			'front-end',
			'react',
			'nextjs',
			'typescript',
			'vue',
			'nuxt',
			'stencil',
			'zustand',
			'recoil',
			'redux',
			'pinia',
			'vuex',
			'rxjs',
      "figma"
		],
		response: `Brahim is highly skilled in frontend development. He has expertise in React.js, Next.js, TypeScript, and various related libraries and frameworks. He's passionate about creating intuitive, responsive, and accessible user interfaces.`,
	},
	{
		keywords: ['backend', 'node', 'express', 'mongodb', 'Mern'],
		response: `While Brahim specializes in frontend development, he also has strong backend skills. He works with Node.js, Express.js, MongoDB, and can build full-stack applications with RESTful or GraphQL APIs.`,
	},
	{
		keywords: ['education', 'study', 'university', 'degree'],
		response: `Brahim has a background in computer science and continues to stay updated with the latest technologies through self-learning and professional development.`,
	},
	{
		keywords: ['location', 'live', 'based', 'from', 'country'],
		response: `Brahim is based in France but works with clients globally.`,
	},
	{
		keywords: ['resume', 'cv', 'download'],
		response: `You can download Brahim's resume from the sidebar menu or visit his website at https://www.brahimsourny.dev/en to get the most up-to-date version.`,
	},
];

export async function matchQueryToResponse(query: string): Promise<string> {
	const normalizedQuery = query.toLowerCase();

	// Check for matches against our patterns
	for (const pattern of patterns) {
		if (pattern.keywords.some((keyword) => normalizedQuery.includes(keyword))) {
			if (typeof pattern.response === 'function') {
				return pattern.response();
			}
			return pattern.response;
		}
	}

	// Default response if no pattern matches
	return `I don't have specific information about that. You might want to ask about Brahim's skills, experience, projects, or how to contact him. Alternatively, you can visit his website at https://www.brahimsourny.dev/en for more information.`;
}
