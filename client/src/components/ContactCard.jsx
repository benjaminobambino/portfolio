import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <div>
      <a href={contact.url} target="_blank" rel="noopener noreferrer" className="contact-card">
        <h4>{contact.name}</h4>
        <div>
          <img src={contact.pic} alt={contact.name} className="contact-image" />
        </div>
        <h4>{contact.text}</h4>
      </a>
    </div>
  )
} 

export default ContactCard