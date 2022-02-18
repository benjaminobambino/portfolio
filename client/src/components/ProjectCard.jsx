import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <img src={project.pic} alt={project.name} />
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard