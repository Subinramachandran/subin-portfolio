import myImage from '../assets/subin.png';
import {
  FaReact, FaAngular, FaJsSquare, FaHtml5, FaCss3Alt,
  FaBootstrap, FaNodeJs, FaDatabase
} from 'react-icons/fa';
import {
  SiJquery, SiTailwindcss, SiTypescript, SiExpress
} from 'react-icons/si';

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
    <div id="about" className="w-full py-10 px-4">
      <div className="max-w-2xl md:max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="rounded-full bg-white p-1 mb-4 inline-block shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={myImage}
              alt="Subin"
              className="rounded-full w-40 h-40 md:w-80 md:h-80"
            />
          </div>
          <h1 className="text-3xl font-bold text-purple-800 dark:text-white">Subin</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-sm">Front-End Developer</p>
        </div>

        <h2 className="text-3xl font-semibold text-purple-800 dark:text-white mb-3">About Me</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 text-justify">
          Hello, I'm <span className="text-xl font-semibold text-gray-900 dark:text-white">Subin</span> — a front-end developer skilled in
          <span className="text-blue-600 font-medium"> React</span> and
          <span className="text-red-500 font-medium"> Angular</span>. I enjoy building clean and modern UIs with
          <span className="text-teal-600 font-medium"> Tailwind CSS</span>.
        </p>

        <h2 className="text-xl font-semibold text-purple-800 dark:text-white mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-gray-700 dark:to-gray-800 rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition duration-300 justify-center"
            >
              <span className="text-xl sm:text-2xl">{icon}</span>
              <span className="text-purple-800 dark:text-white font-medium text-base">{name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-purple-800 dark:text-white mb-2">Location</h2>
        <p className="text-gray-700 dark:text-gray-300 text-base flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-800 dark:text-pink-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Kochi, Kerala
        </p>
      </div>
    </div>
  );
};

export default About;
