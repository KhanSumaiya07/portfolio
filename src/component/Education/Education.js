import React, { useRef, useEffect } from "react";
import EducationBox from "./EducationBox";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Education = () => {
  const containerRef = useRef(null);

  const scrollToNext = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth;
      console.log(container, scrollAmount);
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToPrev = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth;
      console.log(container, scrollAmount);
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div id="education" data-scroll data-scroll-speed="2">
      <div className="education-section sec-padding">
        <div className="heading">
          <h2>
            My<mark> Education</mark>{" "}
          </h2>
        </div>
        <div className="edu-prev-next-btn">
          <button className="prev-btn" onClick={scrollToPrev}>
            <FaArrowLeft />
          </button>
          <button className="next-btn" onClick={scrollToNext}>
            <FaArrowRight />
          </button>
        </div>
        <div className="educ-container" ref={containerRef} style={{ overflowX: "hidden", display: "flex", scrollBehavior: "smooth" }}>
          <EducationBox
            eduLogo={
              "https://images.collegedunia.com/public/college_data/images/logos/1631612123Screenshot20210914145635.png"
            }
            ClgName={"Technocrats Institute of Technology Bhopal"}
            Degree={"Master of Technology (CSE) "}
            Duration={"Aug 2023 - Present"}
            Grade={"Grade: 7.5 CGPA"}
            DegPara={
              "Currently pursuing my Master of Technology at TIT College, where I am deepening my knowledge in advanced technical concepts and innovative practices. This program is refining my expertise in software development and design, preparing me to tackle complex challenges in the tech industry."
            }
          />

          <EducationBox
            eduLogo={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3Z7wEq2CdPcJBGILEZWul6ElNaUMlPOSQg&s"
            }
            ClgName={"NRI Institute of Information Science and Technology"}
            Degree={"Becholor of Technology (CSE) "}
            Duration={"Aug 2019 - May 2023"}
            Grade={"Grade: 8.1 CGPA"}
            DegPara={
              "Graduated with a Bachelor of Technology from NRI Institute of Technology. Here, I built a solid foundation in computer science and engineering, honing my skills in coding, problem-solving, and design. My time at NRI laid the groundwork for my passion for frontend development and UI/UX design."
            }
          />

          <EducationBox
            eduLogo={
              "https://i0.wp.com/iqrafoundation.com/wp-content/uploads/2023/03/cropped-IQRA-Logo-Green-Square-1x1-1.jpg?fit=512%2C512&ssl=1"
            }
            ClgName={"Darshgah Iqra Higher Secondary School Rankai"}
            Degree={"Higher Secondary Education (MPBSE)"}
            Duration={"July 2017 - April 2019"}
            Grade={"Grade: 79%"}
            DegPara={
              "Completed my Senior Secondary Education at Darshgah Iqra School, where I developed a strong analytical mindset and a love for learning. My time here instilled in me the discipline and curiosity that drives my continuous pursuit of knowledge and technical excellence."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
