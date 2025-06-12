import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo & Title */}
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400">
                        SUBIN RAMACHANDRAN
                    </h1>
                    <p className="text-sm md:text-base mt-1 font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                        <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
                            Web Developer
                        </span>
                    </p>
                </div>

                {/* Hamburger Icon */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {isMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-lg text-gray-700 dark:text-gray-200 font-medium">
                    <li>
                        <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            About
                        </a>
                    </li>                    
                    <li>
                        <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col space-y-4 text-lg text-gray-700 dark:text-gray-200 font-medium">
                        <li>
                            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                About
                            </a>
                        </li>                        
                        <li>
                            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
