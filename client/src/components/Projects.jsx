import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/data'

const Projects = () => {

  return (
    <div className="projects">
      <h1>My Projects</h1>
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