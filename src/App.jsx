import { useState,useEffect  } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react"
import ToggleButton from "react-toggle-button";
import { FaSun, FaMoon } from "react-icons/fa";
import Flag from 'react-world-flags';  // Exemplu cu o bibliotecă de steaguri
import { useLanguage } from "./components/Lang/LanguageContext";

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
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  const getCssVar = (variable) => {
   return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  }
  // eslint-disable-next-line react/prop-types
  const ThemeThumbIcon = ({ isActive }) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      {isActive ? <FaSun color="yellow" size={20} /> : <FaMoon color="white" size={20} />}
    </div>
  );
  
  const thumbStyle = {
    width: 30,
    height: 30,
    borderRadius: 15,
  };
  const [activeSection, setActiveSection] = useState("about");

  const flipVariants = {
    initial: { rotateY: 90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: { rotateY: -90, opacity: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className={`${theme} ${lang}`}>
    <div  className='toggle-button'>
      <ToggleButton inactiveLabel={''}
        activeLabel={""}
        thumbIcon={<Flag  code={lang === "EN" ? "GB" : "RO"} className="lang-icon" />}
        thumbStyle={thumbStyle}
        thumbAnimateRange={[-10, 36]}
        
        colors={{
          activeThumb: { base: getCssVar("--text-primary") },
          inactiveThumb: { base: getCssVar("--accent-primary") },
          active: {
            base: getCssVar("--accent-primary"),
            hover: getCssVar("--accent-secondary"),
          },
          inactive: {
            base: getCssVar("--bg-card"),
            hover: getCssVar("--shadow") || getCssVar("--hover"),
          },
        }}
        value={lang === "EN"}
        onToggle={() => setLang(lang === "EN" ? "RO" : "EN")}
        />

      <ToggleButton
        inactiveLabel={''}
        activeLabel={""}
        thumbIcon={<ThemeThumbIcon isActive={theme === "theme-light"} />} 
        thumbStyle={thumbStyle}
        thumbAnimateRange={[-10, 36]}
        
        colors={{
          activeThumb: { base: getCssVar("--text-primary") },
          inactiveThumb: { base: getCssVar("--accent-primary") },
          active: {
            base: getCssVar("--accent-primary"),
            hover: getCssVar("--accent-secondary"),
          },
          inactive: {
            base: getCssVar("--bg-card"),
            hover: getCssVar("--shadow") || getCssVar("--hover"),
          },
        }}
        value={theme === "theme-light"}
        onToggle={() => setTheme(theme === "theme-dark" ? "theme-light" : "theme-dark")}
      />
    </div>
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
