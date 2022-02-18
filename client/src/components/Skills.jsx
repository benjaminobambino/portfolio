import React from 'react'
import SkillCard from './SkillCard'
import javascript from '../assets/javascriptbw.png'
import react from '../assets/reactbw.png'
import css from '../assets/css.png'
import django from '../assets/django.png'
import express from '../assets/ex.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import mongodb from '../assets/mongodb-icon-12.png'
import mongoose from '../assets/mongoose.png'
import node from '../assets/nodebw.png'
import postgresql from '../assets/postgresql.png'
import python from '../assets/pythonbw.png'
import redux from '../assets/redux.png'
import sequelize from '../assets/sequelizebw.png'
import vue from '../assets/vuebw.png'

const Skills = () => {
  const skills = [
    { name: 'JavaScript',
      pic: javascript
    },
    { name: 'Python',
      pic: python
    },
    { name: 'React',
    pic: react
    },
    { name: 'Vue',
      pic: vue
    },
    { name: 'HTML',
      pic: html
    },
    { name: 'Redux',
      pic: redux
    },
    { name: 'Express',
      pic: express
    },
    { name: 'Django',
      pic: django
    },
    { name: 'PostgreSQL',
      pic: postgresql
    },
    { name: 'Sequelize',
      pic: sequelize
    },
    { name: 'MongoDB',
      pic: mongodb
    },
    { name: 'Mongoose',
      pic: mongoose
    },
    { name: 'CSS',
      pic: css
    },
    { name: 'Node',
      pic: node
    },
    { name: 'Git',
      pic: git
    },
    { name: 'GitHub',
      pic: github
    },
  ]


  return (
    <div>
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