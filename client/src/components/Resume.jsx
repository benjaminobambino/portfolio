import React from 'react'
import resume from '../Benjamin-Peck-Resume.pdf'
import resumePic from '../Benjamin-Peck-Resume.png'

const Resume = () => {
  return (
    <div className="resume">
      <img src={resumePic} alt="resume" />
      <a href={resume} attributes-list download>My Resume</a>
    </div>
  )
}

export default Resume