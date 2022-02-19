import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-front">
          <h3>{project.name}</h3>
          <img src={project.pic} alt={project.name} className="project-image" />
        </div>
        <div className="project-card-back">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <h4>{project.techs}</h4>
          <section className="button-container">
            <a href={project.deployed} target="_blank" rel="noopener noreferrer"><button>Deployed App</button></a>
            <a href={project.gitHub} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard