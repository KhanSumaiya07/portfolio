import React, { useEffect, useRef } from "react";
import ExperienceBox from "./ExperienceBox";
import JobInfoContainer from "./JobContainer";

const Experience = () => {
  
  return (
    <div id="experience">
      <div className="experience-section sec-padding">
        <div className="heading">
          <h2>
            My<mark> Experience</mark>{" "}
          </h2>
        </div>
        <div className="exp-container">
          <div className="left-content">
            <ExperienceBox
              expPara={
                "Lorem ipsum dolor sit amet consectetur. Purus turpis odio dapibus tempor dolor. A commodo pellentesque eget vitae arcu massa vel facilisis tortor. Tincidunt ut fermentum facilisi sed penatibus imperdiet urna. Ligula amet purus risus et nunc sed."
              }
            />
            <JobInfoContainer />
            <ExperienceBox
              expPara={
                "Lorem ipsum dolor sit amet consectetur. Purus turpis odio dapibus tempor dolor. A commodo pellentesque eget vitae arcu massa vel facilisis tortor. Tincidunt ut fermentum facilisi sed penatibus imperdiet urna. Ligula amet purus risus et nunc sed."
              }
            />
          </div>
          <div className="mid-scroller">
            <div className="vertical-line">
              <div className="scroller">
                <div className="line"></div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <JobInfoContainer />
            <ExperienceBox
              expPara={
                "Lorem ipsum dolor sit amet consectetur. Purus turpis odio dapibus tempor dolor. A commodo pellentesque eget vitae arcu massa vel facilisis tortor. Tincidunt ut fermentum facilisi sed penatibus imperdiet urna. Ligula amet purus risus et nunc sed."
              }
            />
            <JobInfoContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
