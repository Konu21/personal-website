import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react"

import "./App.scss"; 
import "./style/themes.scss";
import Profile from "./components/profile/Profile";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  const [theme, setTheme] = useState("theme-dark");

  const toggleTheme = () => {
    setTheme(theme === "theme-dark" ? "theme-light" : "theme-dark");
  };
  const [activeSection, setActiveSection] = useState("about");

  const flipVariants = {
    initial: { rotateY: 90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: { rotateY: -90, opacity: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className={theme}>

      <button onClick={toggleTheme}>Schimbă Tema</button>
      <div className="container">
        <Profile />
        <AnimatePresence mode="wait">
        <motion.div
              key={activeSection}
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="content"
            >
          {activeSection === "about" && <About />}
          {activeSection === "experience" && <Experience />}    
          {activeSection === "skills" && <Skills />}  
          {activeSection === "contact" && <Contact />}   
          </motion.div>

        </AnimatePresence>
      
        <Navbar setActiveSection={setActiveSection} />
      </div>
      <SpeedInsights />

    </div>
  );
}

export default App;
