import myImage from '../assets/subin.png';
import { FaReact, FaAngular, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaDatabase} from 'react-icons/fa';
import { SiJquery } from "react-icons/si";
import { SiTailwindcss, SiTypescript, SiExpress } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact className="inline-block mr-1 text-blue-500" /> },
    { name: 'Angular', icon: <FaAngular className="inline-block mr-1 text-red-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="inline-block mr-1 text-teal-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="inline-block mr-1 text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="inline-block mr-1 text-blue-700" /> },
    { name: 'HTML', icon: <FaHtml5 className="inline-block mr-1 text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="inline-block mr-1 text-blue-600" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="inline-block mr-1 text-purple-700" /> },
    { name: 'Node.js', icon: <FaNodeJs className="inline-block mr-1 text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="inline-block mr-1 text-gray-700 dark:text-gray-200" /> },
    { name: 'MongoDB', icon: <FaDatabase className="inline-block mr-1 text-green-700" /> },
    { name: 'jQuery', icon: <SiJquery className="inline-block mr-1 text-blue-500" /> },
];

const About = () => {
    return (
        <div className="bg-gradient-to-br from-blue-500 to-pink-200 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-6 md:p-8 animate-fade-in">
                <div className="flex flex-col md:flex-row">
                    {/* Image and Name */}
                    <div className="md:w-1/3 text-center mb-6 md:mb-0">
                        <img
                            src={myImage}
                            alt="Subin"
                            className="rounded-full w-60 h-60 sm:w-52 sm:h-52 md:w-60 md:h-60 mx-auto mb-4 border-4 border-purple-800 dark:border-pink-700 transition-transform duration-300 hover:scale-105"
                        />
                        <h1 className="text-xl sm:text-2xl font-bold text-purple-800 dark:text-white mb-2">Subin</h1>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Front-End Developer</p>
                    </div>

                    {/* About & Skills */}
                    <div className="md:w-2/3 md:pl-6 lg:pl-8">
                        <h2 className="text-lg sm:text-xl font-semibold text-purple-800 dark:text-white mb-4">About Me</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                            Hello, I'm <span className="font-semibold text-gray-900 dark:text-white">Subin</span> — a front-end developer skilled in <span className="text-blue-600 font-medium">React</span> and <span className="text-red-500 font-medium">Angular</span>. I enjoy building clean and modern UIs with <span className="text-teal-600 font-medium">Tailwind CSS</span>.
                        </p>

                        <h2 className="text-lg sm:text-xl font-semibold text-purple-800 dark:text-white mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-4 mb-6 justify-center">
                            {skills.map(({ name, icon }) => (
                                <div
                                    key={name}
                                    className="
                    flex items-center gap-3
                    bg-gradient-to-r from-purple-100 to-purple-200 dark:from-gray-700 dark:to-gray-800
                    rounded-lg
                    px-4 py-3
                    shadow-md
                    hover:shadow-lg
                    transition-shadow duration-300
                    cursor-default
                    w-full sm:w-[48%] md:w-[30%]
                    text-center
                    justify-center">
                                    <span className="text-2xl sm:text-3xl text-purple-700 dark:text-pink-400">{icon}</span>
                                    <span className="text-purple-800 dark:text-white font-semibold text-base sm:text-lg">{name}</span>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-lg sm:text-xl font-semibold text-purple-800 dark:text-white mb-4">Location</h2>
                        <p className="text-gray-700 dark:text-gray-300 flex items-center text-sm sm:text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-800 dark:text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            Kochi, Kerala
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
