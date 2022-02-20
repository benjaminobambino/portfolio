import React from 'react'
import SkillCard from './SkillCard'
import javascript from '../icons/javascriptbw.png'
import react from '../icons/reactbw.png'
import css from '../icons/css.png'
import django from '../icons/django.png'
import express from '../icons/express-squared.png'
import git from '../icons/git.png'
import github from '../icons/github.png'
import html from '../icons/html.png'
import mongodb from '../icons/mongodb-icon-12.png'
import mongoose from '../icons/mongoose.png'
import node from '../icons/nodebw.png'
import postgresql from '../icons/postgresql.png'
import python from '../icons/pythonbw.png'
import redux from '../icons/redux.png'
import sequelize from '../icons/sequelize-squared.png'
import sql from '../icons/sql.png'
import vue from '../icons/vuebw.png'

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
  { name: 'Django',
    pic: django
  },
  { name: 'SQL',
    pic: sql
  },
  { name: 'PostgreSQL',
    pic: postgresql
  },
  { name: 'Express',
    pic: express
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

const Skills = () => {

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