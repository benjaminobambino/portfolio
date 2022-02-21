import React from 'react'

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <section>
          <img src="/peck-155-blp.JPG" alt="picture" className="self-image"/>
        </section>
        <section className="about-text">
          <p>After several years 
            of enjoying life as a touring musician, I found that my touring life was 
            not sustainable with the direction I wanted to go with my growing family. Wondering what else 
            I might want to do for a living, I started to learn some basic programming. It wasn&rsquo;t 
            long before I discovered a deep love for software engineering. Soon thereafter, I accelerated 
            my learning by going through a full-time, intensive software engineering boot camp where I 
            spent over 70 hours per week for twelve weeks learning and practicing each technology I 
            learned.
          </p>
          <p>Now, I am a full-stack software engineer taking my wide background of creativity, 
            versatility, coachability, relatability, hard work, ongoing learning, and critical 
            thinking into the depths of code. Coming from the worlds of music and philosophy, I 
            aim to make well-thought and beautiful contributions wherever I am.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About