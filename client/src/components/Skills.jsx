import React from 'react'
import SkillCard from './SkillCard'
import { skills } from '../data/data'

const Skills = () => {

  return (
    <div className="skills">
      <h1>My Continually Growing Repertoire</h1>
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