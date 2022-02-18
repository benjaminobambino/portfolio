import React from 'react'
import ProjectCard from './ProjectCard'
import choreChart from '../project-pics/chore-chart.png'
import creatureCollab from '../project-pics/creature-collab.png'
import goodDadBadJokes from '../project-pics/good-dad-bad-jokes.png'
import videoGameDb from '../project-pics/video-game-database.png'
import war from '../project-pics/war.png'
import ticTacToe from '../project-pics/tic-tac-toe.png'

const Projects = () => {
  const projects = [
    {
      name: 'Chore Chart',
      pic: choreChart,
      description: '',
      deployed: 'https://chorechart.netlify.app/',
      gitHub: 'https://github.com/benjaminobambino/chore-chart'
    },
    {
      name: 'Creature Collab',
      pic: creatureCollab,
      description: '',
      deployed: 'https://the-creature-collab.herokuapp.com/',
      gitHub: 'https://github.com/moomoomewmew/the-creature-collab'
    },
    {
      name: 'Good Dad Bad Jokes',
      pic: goodDadBadJokes,
      description: '',
      deployed: 'https://herokuapp.com/',
      gitHub: 'https://github.com/benjaminobambino/good-dad-bad-jokes'
    },
    {
      name: 'Video Game DB',
      pic: videoGameDb,
      description: '',
      deployed: 'https://vue-rawg.vercel.app/',
      gitHub: 'https://github.com/benjaminobambino/u4_hw_vue_RAWG'
    },
  ]
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        { projects.map((project) => {
          return(
            <ProjectCard key={project.name} project={project} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects