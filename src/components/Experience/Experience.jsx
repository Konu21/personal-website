import './Experience.scss'
import "../../style/themes.scss";
import { useEffect, useState } from 'react';

import { useLanguage } from '../Lang/LanguageContext';
import experienceData from './experience.json';

function Experience() {
  const {lang, t} = useLanguage()

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
      setExperience(experienceData[lang]?.experience || []);
      setEducation(experienceData[lang]?.education || []);
  }, [lang]);
  return (
    <section id='experience' className='experience-card'>
      <h2>{t.education}</h2>
      <div className='education shared-style'>
      {education.map((item, index) => (
          <div key={index} className='card'>
            <h3>{item.institution}</h3>
            <h4>{item.profile}</h4>
            <p className='period'>{item.startDate} - {item.endDate}</p>
          </div>
        ))}
      </div>
        <h2>{t.experience}</h2>
        <div className='experience shared-style'>
        {experience.map((item, index) => (
          <div key={index} className='card'>
            <h3>{item.position}</h3>
            <h4>{item.company}</h4>
            <p className='period'>{item.startDate} - {item.endDate}</p>
            <p className='summary'>{item.summary}</p>
            <ul>
              {item.highlights.map((desc, index) => (
                <li key={index} className='highlights'>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default Experience
