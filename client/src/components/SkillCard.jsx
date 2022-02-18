import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div>
        <img src={skill.pic} alt={skill.name} className="skill-image" />
      </div>
      <h4>{skill.name}</h4>
    </div>
  )
} 

export default SkillCard