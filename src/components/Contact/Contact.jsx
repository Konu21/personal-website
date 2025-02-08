import  { useState } from 'react'

import './Contact.scss'
import "../../style/themes.scss";

function Contact() {
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
   <form action="" className='contact-card'>
    <h2>Contact</h2>
    <FloatingLabelInput label="Name" type="text" name="name" />
    <FloatingLabelInput label="Email" type="email" name="email" />
    <FloatingLabelInput label="Message" type="text" name="message" isTextarea = "True" />
    <button type="submit" className='submit'>Send</button>
   </form>
  )
}

export default Contact
