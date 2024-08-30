import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceBox from "./ExperienceBox";
import JobInfoContainer from "./JobContainer";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: "#experience",
          start: "top center", // When the top of the #experience section hits the center of the viewport
          end: "bottom center",
          scrub: true, // Smooth scrolling animation
        },
      }
    );
  }, []);

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
            <JobInfoContainer
              profile={"Front-end Development"}
              ComName={"Anncode Solution (Bhopal)"}
              position={"Front-end developer Intern"}
              duration={"Feb 2024 - July 2024"}
            />
            <ExperienceBox
              expPara={
                "Lorem ipsum dolor sit amet consectetur. Purus turpis odio dapibus tempor dolor. A commodo pellentesque eget vitae arcu massa vel facilisis tortor. Tincidunt ut fermentum facilisi sed penatibus imperdiet urna. Ligula amet purus risus et nunc sed."
              }
            />
          </div>
          <div className="mid-scroller">
            <div className="vertical-line">
              <div ref={lineRef} className="scroller">
                <div  className="line"></div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <JobInfoContainer
              profile={"Front-end Development"}
              ComName={"Sheriyans Coding School"}
              position={"Training"}
              duration={"Aug 2023 - Jan 2024"}
            />
            <ExperienceBox
              expPara={
                "Lorem ipsum dolor sit amet consectetur. Purus turpis odio dapibus tempor dolor. A commodo pellentesque eget vitae arcu massa vel facilisis tortor. Tincidunt ut fermentum facilisi sed penatibus imperdiet urna. Ligula amet purus risus et nunc sed."
              }
            />
            <JobInfoContainer
              profile={"Front-end Development"}
              ComName={"Anncode Solution (Bhopal)"}
              position={"Front-end developer"}
              duration={"Aug 2024 - Present"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
