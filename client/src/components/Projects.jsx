import React from 'react'
import ProjectCard from './ProjectCard'
// import choreChart from '../project-pics/chore-chart.png'
// import creatureCollab from '../project-pics/creature-collab.png'
// import goodDadBadJokes from '../project-pics/good-dad-bad-jokes.png'
// import videoGameDb from '../project-pics/video-game-database.png'
// import war from '../project-pics/war.png'
// import ticTacToe from '../project-pics/tic-tac-toe.png'
import { projects } from '../data/data'

// const projects = [
//   {
//     name: 'Chore Chart',
//     pic: '/project-pics/chore-chart.png',
//     description: 'Users can create an account, join an existing household or create their own, and keep track of chores for their whole household.',
//     deployed: 'https://chorechart.netlify.app/',
//     gitHub: 'https://github.com/benjaminobambino/chore-chart',
//     techs: 'Django || Python || PostgreSQL || React || JWT Auth || Axios || 3rd Party API || JavaScript || HTML || CSS || SQL || Insomnia || Postico || Djoser || Git'
//   },
  // {
  //   name: 'Creature Collab',
  //   pic: creatureCollab,
  //   description: 'Group project full-stack app for mythical creatures to create, host, and attend events. Users can create a profile for their character (be it their gaming avatar, D&D persona, LARP alias, or another mythical creature) and discover events with like-minded characters. My contributions were the entire backend and the events-related components.',
  //   deployed: 'https://the-creature-collab.herokuapp.com/',
  //   gitHub: 'https://github.com/moomoomewmew/the-creature-collab',
  //   techs: 'PostgreSQL || Express || React || Node || JWT Auth || Axios || JavaScript || HTML || CSS || Sequelize || Insomnia || Git'
  // },
  // {
  //   name: 'Good Dad Bad Jokes',
  //   pic: goodDadBadJokes,
  //   description: 'Browser-based, full-stack MERN app that does exactly what a good dad should: tell bad jokes. Upon launch, users can immediately enjoy jokes being pulled from the back-end database. Users who sign up can "like" their favorite jokes and contribute their own jokes to the database.',
  //   deployed: 'https://herokuapp.com/',
  //   gitHub: 'https://github.com/benjaminobambino/good-dad-bad-jokes',
  //   techs: 'MongoDB || Mongoose || Express || React || Node || Axios || JavaScript || HTML || CSS || Insomnia || Git'
  // },
  // {
  //   name: 'Video Game DB',
  //   pic: videoGameDb,
  //   description: 'Frontend Vue.js web app that makes Axios calls to the RAWG API and maps through genres and games based on search and browsing selections.',
  //   deployed: 'https://vue-rawg.vercel.app/',
  //   gitHub: 'https://github.com/benjaminobambino/u4_hw_vue_RAWG',
  //   techs: 'Vue || Axios || 3rd Party API || JavaScript || HTML || CSS || Insomnia || Git'
  // },
  // {
  //   name: 'The Game of War',
  //   pic: war,
  //   description: 'The classic card game, "War," using HTML, CSS, and vanilla JavaScript to manipulate the DOM.',
  //   deployed: 'https://the-game-of-war.surge.sh/',
  //   gitHub: 'https://github.com/benjaminobambino/the-game-of-war',
  //   techs: 'JavaScript || HTML || CSS || Git'
  // },
  // {
  //   name: 'Tic-Tac-Toe',
  //   pic: ticTacToe,
  //   description: "My oldest portfolio piece, I built this tic-tac-toe after one week of class at General Assembly's full-time software engineering immersive boot camp. It's a fully functional tic-tac-toe with a running scoreboard, using vanilla JavaScript DOM manipulation.",
  //   deployed: 'https://blp-tic-tac-toe.surge.sh/',
  //   gitHub: 'https://github.com/benjaminobambino/u1_hw_tic_tac_toe',
  //   techs: 'JavaScript || HTML || CSS || Git'
  // },
// ]

// const projects = 

const Projects = () => {

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