import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <img src={skill.pic} alt={skill.name} className="skill-image" />
      <h5>{skill.name}</h5>
    </div>
  )
} 

export default SkillCard