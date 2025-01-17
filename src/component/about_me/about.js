import React, { useState } from "react";
import "../style.css";

const About = () => {
  // State to keep track of the currently open section
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    // If the clicked section is already open, close it; otherwise, open the clicked section
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div id="about" data-scroll data-scroll-speed="2">
      <div className="main-wrapper sec-padding">
        <div className="heading">
          <h2>
            About <mark>Me</mark>{" "}
          </h2>
        </div>
        <div className="flex">
          <div className="left">
            <div className="img-container">
              {/* You can add an image here */}
            </div>
          </div>
          <div className="right">
            <div className="about-content">
              <h3>
                Hi, I’m Sumaiya Khan, a <mark>Frontend</mark> Developer &{" "}
                <mark>UI/UX</mark> Designer
              </h3>
              <p>
                As a Frontend Developer and UI/UX Designer, I create intuitive,
                user-friendly digital solutions. My journey is driven by a
                commitment to excellence, continuous learning, and a passion for
                turning ideas into reality.
              </p>

            

              {/* Hobbies/Interests Section */}
              <div className="section">
                <div
                  className="subheading"
                  onClick={() => toggleSection("interests")}
                >
                  <span>Hobbies & Interests</span>
                  <span>{openSection === "interests" ? "-" : "+"}</span>
                </div>
                {openSection === "interests" && (
                  <p>
                    Outside of work, I love to read Books, Playing chess, and
                    journaling, which fuel my creativity and provide balance in
                    my professional life.
                  </p>
                )}
              </div>

              {/* Goals Section */}
              <div className="section">
                <div
                  className="subheading"
                  onClick={() => toggleSection("goals")}
                >
                  <span>Future Goals</span>
                  <span>{openSection === "goals" ? "-" : "+"}</span>
                </div>
                {openSection === "goals" && (
                  <p>
                    I am determined to become a leading Full Stack Developer,
                    combining frontend and backend expertise to deliver
                    innovative and comprehensive solutions.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
