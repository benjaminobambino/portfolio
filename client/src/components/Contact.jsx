import React from 'react'
import ContactCard from './ContactCard'
import email from '../icons/email.png'
import linkedIn from '../icons/linkedin.png'
import gitHub from '../icons/github.png'

const contacts = [
  {
    name: 'Email',
    url: 'mailto:benjaminlpeck@gmail.com?subject=Full Stack Software Engineer',
    pic: email
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/benjaminlpeck/',
    pic: linkedIn
  },
  {
    name: 'GitHub',
    url: 'https://www.linkedin.com/in/benjaminlpeck/',
    pic: gitHub
  },
]

const Contact = () => {
  return (
    <div className="contact">
      <h1>Connect</h1>
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