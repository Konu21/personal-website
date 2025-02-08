import './Experience.scss'
import "../../style/themes.scss";

import ExperienceData from './experience.json'
function Experience() {
  
  return (
    <section id='experience' className='experience-card'>
      <h2>Education</h2>
      <div className='education shared-style'>
      {ExperienceData.education.map((item, index) => (
          <div key={index} className='card'>
            <h3>{item.institution}</h3>
            <h4>{item.profile}</h4>
            <p className='period'>{item.startDate} - {item.endDate}</p>
          </div>
        ))}
      </div>
        <h2>Experience</h2>
        <div className='experience shared-style'>
        {ExperienceData.experience.map((item, index) => (
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
