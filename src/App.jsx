import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from "./components/Projects.jsx";
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
