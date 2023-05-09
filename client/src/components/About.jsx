import React from 'react'

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <section>
          <img src="/peck-155-blp.JPG" alt="Benjamin L Peck" className="self-image"/>
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
          <p>The boot camp has more than paid off, as I shortly thereafter began my first development role
            writing automated underwriting software for a major mortgage lender. Despite being hired to work
            in languages and frameworks far beyond what I learned in boot camp, I thrived taking on new challenges,
            acquiring new skills, and learning on-the-job in a way that not only benefitted the product from my
            contributions directly, but also benefitted my teammates as I was able to share with them what I had
            learned.
          </p>
          <p>Now, I am a full-stack software engineer with a wide background in problem-solving, creativity, 
            versatility, coachability, hard work, ongoing learning, critical thinking, and communication. I 
            maintain a leave-it-better-than-you-found-it approach with all things, particularly in my passions 
            for software, music, and people.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About