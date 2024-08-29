import React from "react";
import EducationBox from "./EducationBox";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education">
      <div class="education-section sec-padding">
        <div class="heading">
          <h2>
            My<mark> Education</mark>{" "}
          </h2>
        </div>
        <div className="edu-prev-next-btn">
          <div className="prev-btn">
            <FaArrowLeft />
          </div>
          <div className="next-btn">
            <FaArrowRight />
          </div>
        </div>
        <div class="educ-container">
          <EducationBox
            eduLogo={
              "https://images.collegedunia.com/public/college_data/images/logos/1631612123Screenshot20210914145635.png"
            }
            ClgName={"Technocrats Institute of Technology Bhopal"}
            Degree={"Master of Technology (CSE) "}
            Duration={"Aug 2023 - Present"}
            Grade={"Grade: 7.5 CGPA"}
            DegPara={
              "Lorem ipsum dolor sit amet consectetur. Nam potenti aliquet amet pellentesque enim. Scelerisque in risus elementum accumsan elementum etiam sagittis. Ut eleifend consequat condimentum malesuada eget viverra."
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
              "Lorem ipsum dolor sit amet consectetur. Nam potenti aliquet amet pellentesque enim. Scelerisque in risus elementum accumsan elementum etiam sagittis. Ut eleifend consequat condimentum malesuada eget viverra."
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
              "Lorem ipsum dolor sit amet consectetur. Nam potenti aliquet amet pellentesque enim. Scelerisque in risus elementum accumsan elementum etiam sagittis. Ut eleifend consequat condimentum malesuada eget viverra."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
