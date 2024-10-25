import React from "react";

const ProjectBox = ({ projImg, projName, projType, projPara, techStack =[], projLink }) => {
  console.log(projImg);
  return (
    <div className="project-box">
      <div className="about-project-left">
        <div className="img-container">
          <img src={projImg} />
        </div>
      </div>
      <div className="about-project-right">
        <div className="tech-stack">
        {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className="proj-name">
          <h4>{projName}</h4>
        </div>
        <div className="proj-type">
          <h5>{projType}</h5>
        </div>
        <div className="proj-para">
          <p>{projPara}</p>
        </div>
        <button className="project_link_btn">
          <a href={projLink} target="_blank">View Project</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectBox;
