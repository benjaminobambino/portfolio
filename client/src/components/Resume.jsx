import React from 'react'
import resume from '../Benjamin-Peck-Resume.pdf'
import resumeOne from '../Benjamin-Peck-Resume-page-1.png'
import resumeTwo from '../Benjamin-Peck-Resume-page-2.png'

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <section className="resume-container">
        <img src={resumeOne} alt="resume" className="resume-image" />
        <img src={resumeTwo} alt="resume" className="resume-image" />
      </section>
      <a href={resume} download="Benjamin-L-Peck-Resume"><button>Download My Resume</button></a>
      <h4 onClick={() => scroll.scrollToTop()}>Back to Top</h4>
    </div>
  )
}

export default Resume