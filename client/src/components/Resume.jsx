import React from 'react'

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

const Resume = () => {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <section className="resume-container">
        <img src="/Benjamin-Peck-Resume-page-1.png" alt="resume" className="resume-image" />
        <img src="/Benjamin-Peck-Resume-page-2.png" alt="resume" className="resume-image" />
      </section>
      <a href="/Benjamin-Peck-Resume.pdf" download="Benjamin-L-Peck-Resume"><button>Download My Resume</button></a>
      <h4 onClick={() => scroll.scrollToTop()}>Back to Top</h4>
    </div>
  )
}

export default Resume