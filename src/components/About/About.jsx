import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faServer } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../Lang/LanguageContext';

import './About.scss';
import "../../style/themes.scss";

function AboutSection() {
   const { t } = useLanguage();
 
  return (
    <section
    id="about"
    className="about-card"
  >
        <h2>{t.about}</h2>
        
          <div className="about-intro">
            <p className="highlight">{t.about_highlight}</p>
          </div>

          <div className="expertise">
            <div className="expertise-item">
              <FontAwesomeIcon icon={faPaintBrush} />
              <h3>{t.frontend_focus}</h3>
              <p dangerouslySetInnerHTML={{ __html: t.frontend_focus_text }} />
              <div className="skillTags">
                <span className="skillTag">React</span>
                <span className="skillTag">Figma</span>
              </div>
            </div>

            <div className="expertise-item">
              <FontAwesomeIcon icon={faServer} />
              <h3>{t.backend_connection}</h3>
              <p dangerouslySetInnerHTML={{ __html: t.backend_connection_text }} />
              <div className="skillTags">
                <span className="skillTag">Python</span>
                <span className="skillTag">Flask</span>
              </div>
            </div>
          </div>

          <div className="philosophy">
            <blockquote>
              <p>
                {t.philosophy}
              </p>
            </blockquote>
            
            <div className="skills">
              {t.skills_about.map((skill, index) => (
                <span key={index} className="skillTag">{skill}</span>
              ))}
            </div>
          </div>
    </section>
  );
};

export default AboutSection;