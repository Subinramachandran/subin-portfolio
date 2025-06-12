// src/components/Projects.jsx
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'Product Landing Page',
        description: 'A modern personal portfolio built with React and Tailwind CSS.',
        github: 'https://github.com/Subinramachandran/my-landing-page',
        demo: 'https://subinramachandran.github.io/my-landing-page/',
    },
    {
        title: 'Login Page',
        description: 'A fully responsive login page built with Tailwind CSS, designed for modern web applications.',
        github: 'https://github.com/Subinramachandran/tailwindcss',
        demo: 'https://subinramachandran.github.io/tailwindcss/',
    },
    // Add more projects here...
];

const Projects = () => {
    return (
        <section className="bg-gradient-to-br from-pink-200 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4" id="projects">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-purple-800 dark:text-white mb-8">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-purple-800 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-700 transition"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 transition"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
