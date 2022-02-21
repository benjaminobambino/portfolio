import React from 'react'

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about-container">
        <section>
          <img src="/peck-155-blp.JPG" alt="picture" className="self-image"/>
        </section>
        <section className="about-text">
          <p>After several years 
            of thoroughly enjoying life as a touring musician, I found that my touring life was 
            not sustainable with the direction I wanted to go with my growing family. I discovered 
            a deep love for software engineering and can hardly believe I didn&rsquo;t discover it sooner.
          </p>
          <p>I am a full-stack software engineer taking my wide background of creativity, 
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