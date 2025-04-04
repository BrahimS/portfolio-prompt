export const projects = [
  {
    title: "Shared ui components",
    description: "A scalable and reusable component library, built with React.js, Nx, and TypeScript.",
    technologies: ["React.js", "TypeScript", "Styled Components", "Radix UI Primitives", "Clean Architecture", "Storybook", "Cypress"],
    features: ["Modern and component-driven development", "Modular and dynamic CSS-in-JS styling", "Accessible, low-level building blocks", "Enforces separation of concerns and maintainable code", "Visualize and test components in isolation", "Powered by Cypress for robust application testing", "Ensures strong typing for maintainability", "Add new projects using other frameworks or styling tools.", "GitHub Actions for continuous integration", "Husky for pre-commit test automation", "Nx for monorepo management", "Storybook for component documentation"],
    link: "https://github.com/BrahimS/shared-ui-components",
  },
  {
    title: "COVID-19 tracker web application",
    description: "A web application providing real-time data on the progress of COVID-19 worldwide, along with important information about the virus and protective measures.",
    technologies: ["Next.js, React", "TypeScript", "sass/css", "GitHub Actions", "Husky"],
    features: ["Retrieves live data on COVID-19 cases, recoveries, and deaths worldwide using an open-source API.", "Provides information sourced from the WHO about COVID-19 transmission and prevention."],
    link: "https://covid19-bs.vercel.app/",
  },
  {
    title: "Notification management system",
    description: "This is a persistent notification system that allows for managing notifications across multiple instance with synchronization and persistance across page reloads.",
    technologies: ["Vie.js", "TypeScript", "TailwindCSS", "GitHub Actions", "Husky", "Vite", "localStorage", "Jest", "Playwright"],
    features: [" Display and manage notifications (success, error, info).", " Persist notifications across page reloads using localStorage.", "Support multiple instance of notification widget, all synchronized", "Namespace support for different notification contexts", "Unread notification counter", "Clean, responsive Ui with TailwindCSS"],
    link: "https://notifi-sys.vercel.app/",
  },
];
