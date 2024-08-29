import React from "react";

const ProjectBox = ({ projImg, projName, projType, projPara }) => {
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
          <span>Wireframing</span>
          <span>Prototyping</span>
          <span>Plugins</span>
          <span>Plugins</span>
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
      </div>
    </div>
  );
};

export default ProjectBox;
