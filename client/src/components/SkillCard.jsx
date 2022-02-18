import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <img src={skill.pic} alt={skill.name} className="skill-image" />
      <h4>{skill.name}</h4>
    </div>
  )
} 

export default SkillCard