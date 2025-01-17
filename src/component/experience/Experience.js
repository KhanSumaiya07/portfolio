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
    <div id="experience" data-scroll data-scroll-speed="2">
      <div className="experience-section sec-padding">
        <div className="heading">
          <h2>
            My<mark> Experience</mark>{" "}
          </h2>
        </div>
        <div className="exp-container">
          <div className="left-content">
            
             <JobInfoContainer
              profile={"Front-end Development"}
              ComName={"Anncode Solution (Bhopal)"}
              position={"Front-end developer"}
              duration={"Aug 2024 - Present"}
            />
            <ExperienceBox
              expPara={
                "Completed a comprehensive training in front-end development, focusing on HTML, CSS, JavaScript, and web animations. Gained practical experience in building responsive web applications and enhancing UI/UX design skills."
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
          <ExperienceBox
              expPara={
                "Currently working as a Front-End Developer, focusing on developing and optimizing web interfaces. Involved in building responsive designs, enhancing user experience, and implementing performance improvements."
              }
            />
            <JobInfoContainer
              profile={"Front-end Development"}
              ComName={"Sheriyans Coding School"}
              position={"Training"}
              duration={"Aug 2023 - Jan 2024"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
