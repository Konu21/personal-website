import "./Skills.scss";
import "../../style/themes.scss";
import { useLanguage } from "../Lang/LanguageContext";
import { useEffect, useRef } from "react";
import SkillsData from "./skills.json";

function Skills() {
  const trackRef = useRef(null);
  const { t } = useLanguage();
   
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.style.animation = "scrollCarousel 10s linear infinite";
    }
  }, []);

  return (
    <section id="skills" className="skills-card">
      <h2>{t.skills}</h2>
      <div className="skills carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {SkillsData.skills.concat(SkillsData.skills).map((item, index) => (
            <div key={index} className="item">
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <h2>{t.tools}</h2>
      <div className="tools shared-style">
        {SkillsData.tools.map((item, index) => (
          <div key={index} className="item">
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
