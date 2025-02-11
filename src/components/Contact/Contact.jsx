import  { useRef, useState } from 'react'

import './Contact.scss'
import "../../style/themes.scss";
import emailjs from '@emailjs/browser';
import { useLanguage } from '../Lang/LanguageContext';

function Contact() {
  const form = useRef()
  const { t } = useLanguage();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ikyu9h5', 'template_x3pdavb', form.current, { publicKey: 'pLZdAoBpyw1HHr7YR' })
    .then((result) => {
        alert("Your message has been sent successfully!");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          alert("Your message has not been sent. Try again please!");
      });
      form.current.reset()
  }
  // eslint-disable-next-line react/prop-types
  const FloatingLabelInput = ({ label, type, name, isTextarea }) => {
    const [value, setValue] = useState("");
    
    return (
      <div className="form-group">
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-field"
          required
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-field"
          required
        />
      )}
      <label htmlFor={name} className={`input-label ${value ? "filled" : ""} ${isTextarea ? "text-area" : ""}`}>{label}</label>
    </div>
    );
  };
  
  return (
   <form ref={form} action="" className='contact-card' onSubmit={sendEmail}>
    <h2>Contact</h2>
    <FloatingLabelInput label={t.name} type="text" name="from_name" />
    <FloatingLabelInput label={t.email} type="email" name="from_email" />
    <FloatingLabelInput label={t.message} type="text" name="message" isTextarea = {true} />
    <button type="submit" className='submit'>{t.send}</button>
   </form>
  )
}

export default Contact
