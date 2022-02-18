import React from 'react'
import SkillCard from './SkillCard'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'

const Skills = () => {
  const skills = [
    { name: 'JavaScript',
      pic: javascript
    },
    { name: 'Python',
      pic: '../assets/python.png'
    }
  ]


  return (
    <div>
      <h1>Skills</h1>
      <section className="skills-container">
        {skills.map((skill) => {
          return (
            <div key={skill.name}>
              <SkillCard skill={skill} />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Skills