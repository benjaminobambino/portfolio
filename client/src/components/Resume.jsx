import React from 'react'
import resume from '../Benjamin-Peck-Resume.pdf'
import resumeOne from '../Benjamin-Peck-Resume-page-1.png'
import resumeTwo from '../Benjamin-Peck-Resume-page-2.png'

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <section className="resume-container">
        <img src={resumeOne} alt="resume" className="resume-image" />
        <img src={resumeTwo} alt="resume" className="resume-image" />
      </section>
      <a href={resume} attributes-list download><button>Download My Resume</button></a>
    </div>
  )
}

export default Resume