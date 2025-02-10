import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faServer } from '@fortawesome/free-solid-svg-icons';
import './About.scss';
import "../../style/themes.scss";

function AboutSection() {
 
  return (
    <section
    id="about"
    className="about-card"
  >
        <h2>About me</h2>
        
          <div className="about-intro">
            <p className="highlight">
            Passionate about software development, with a proactive mindset and solution orientation. I am always motivated to learn and adapt modern tools.            </p>
          </div>

          <div className="expertise">
            <div className="expertise-item">
              <FontAwesomeIcon icon={faPaintBrush} />
              <h3>Frontend Focus</h3>
              <p>I deepen expertise in <strong>React</strong> and <strong>Figma</strong>, from UI/UX design to implementation of robust components.</p>
              <div className="skillTags">
                <span className="skillTag">React</span>
                <span className="skillTag">Figma</span>
              </div>
            </div>

            <div className="expertise-item">
              <FontAwesomeIcon icon={faServer} />
              <h3>Backend Connection</h3>
              <p>I keep in touch with <strong>Python</strong> and <strong>Flask</strong>, building coherent solutions by understanding both areas.</p>
              <div className="skillTags">
                <span className="skillTag">Python</span>
                <span className="skillTag">Flask</span>
              </div>
            </div>
          </div>

          <div className="philosophy">
            <blockquote>
              <p>
                “Technical skills are complemented by a communicative approach and attention to detail. I&apos;m looking for complex projects where I can balance the creativity of the frontend with the logic of the backend.&quot;
              </p>
            </blockquote>
            
            <div className="skills">
              {["Agile Methodology", "Problem Solving", "Continuous Learning"].map((skill, index) => (
                <span key={index} className="skillTag">{skill}</span>
              ))}
            </div>
          </div>
    </section>
  );
};

export default AboutSection;