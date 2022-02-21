import React from 'react'
import ContactCard from './ContactCard'
import { contacts } from '../data/data'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <section className="contacts-container">
        {contacts.map((contact) => {
          return(
            <div key={contact.name}>
              <ContactCard contact={contact}/>
            </div>
          )
        })
        }
      </section>
    </div>
  )
}

export default Contact