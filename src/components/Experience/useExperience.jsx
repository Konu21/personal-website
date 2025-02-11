import { useState, useEffect } from 'react';
import experienceData from './experience.json'; // presupunând că ai fișierul de date

const useExperience = (lang) => {
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    try {
      setExperience(experienceData[lang]?.experience || []);
      setEducation(experienceData[lang]?.education || []);
    } catch (error) {
      console.error("Error in useExperience:", error);
    }
  }, [lang]);
  

  return { experience, education };
};

export default useExperience;
