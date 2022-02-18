import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <img src={project.pic} alt={project.name} className="project-image" />
      <p>{project.description}</p>
      <section className="button-container">
        <a href={project.deployed} target="_blank" rel="noopener noreferrer"><button>Deployed App</button></a>
        <a href={project.gitHub} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
      </section>
    </div>
  )
}

export default ProjectCard