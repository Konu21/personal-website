
import './Profile.scss'
import "../../style/themes.scss";

import contactData from "./contact-info.json";
import avatar from "../../../public/rb_9123.svg";
import {MdPhone, MdEmail, MdLocationOn,MdCalendarMonth  } from "react-icons/md";
import { FaLinkedinIn , FaInstagram, FaGithub } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import { useLanguage } from '../Lang/LanguageContext';

function Profile() {
  const { t } = useLanguage();
  const [typeEffect] = useTypewriter({
    words: ["Python Developer", "React Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  const getIcon = (type) => {
    switch (type) {
      case 'phone':
        return <MdPhone />;
      case 'email':
        return <MdEmail />;
      case 'location':
        return <MdLocationOn />;
      case 'calendar':
        return <MdCalendarMonth />;
      case 'linkedin':
        return <FaLinkedinIn  />;
      case 'instagram':
        return <FaInstagram />;
      case 'github':
        return <FaGithub />
      default:
        return null;
    }
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Paun George Bogdan Resume EN.pdf"; 
    link.download = "Paun George Bogdan Resume EN.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="profile-card">
      <header>
        <img src={avatar} loading="lazy" alt="Profile" />
      </header>
      <div className='profile-info'>
        <h3>Paun Bogdan</h3>
        <h4>Software Developer</h4>
        <p>{typeEffect}</p>
      </div>
      
      <div className='social-media'>
        {contactData.social_media.map((item, index) => (
          <div key={index} className="contact-item">
            <a
        href={item.value}
        aria-label={`Follow me on ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`} 
        title={`Follow me on ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`}  
      >{getIcon(item.type)}</a>
          </div>))}
      </div>
      <div className='contact'>
      {contactData.contact_info.map((item, index) => (
        <div key={index} className="contact-item">
          <span className='icon'>{getIcon(item.type)}</span>
          <span>{item.value}</span>
        </div>
  ))}
      </div>
      <button className='resume-button' onClick={handleDownload}>{t.resume}</button>
    </section>
  )
}

export default Profile
