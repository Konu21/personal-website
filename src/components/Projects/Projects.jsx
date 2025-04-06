
import './Projects.scss'
import "../../style/themes.scss";
import { useLanguage } from '../Lang/LanguageContext';
import { useEffect, useState } from 'react';
import projectsData from './projects.json';
function Projects() {
    const {lang, t} = useLanguage()
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData[lang] || []);
    }, [lang]);
    const handleCardClick = (url) => {
        if (url && url.trim() !== "") {
        window.open(url, '_blank', 'noopener,noreferrer');}
    };
    return (
    <section id="projects" className="projects-card">
        <h2>{t.projects}</h2>
        <div className="skills">
            {projects.map((item, index) => (
                <div key={index} 
                className='card'
                onClick={() => handleCardClick(item.link)}
                role="button"
                tabIndex="0"
                aria-label={`Open ${item.name} project`}>
                    <h3>{item.name}</h3>
                    <p >{item.description}</p>
                    {item.img ? (
                        <img 
                            src={item.img} 
                            alt={item.name} 
                            className="project-image" 
                            loading="lazy"
                            onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                        ) : null}
                </div>
                ))}
        </div>
  </section>)
}

export default Projects
