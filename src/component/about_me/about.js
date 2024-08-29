import React, { useState } from 'react';
import '../style.css';

const About = () => {
  // State to keep track of the currently open section
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    // If the clicked section is already open, close it; otherwise, open the clicked section
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div id='about'>
      <div className='main-wrapper sec-padding'>
        <div className='heading'>
          <h2>About <mark>Me</mark> </h2>
        </div>
        <div className='flex'>
          <div className='left'>
            <div className='img-container'>
              {/* You can add an image here */}
            </div>
          </div>
          <div className='right'>
            <div className='about-content'>
              <h3>Hi, I’m Sumaiya Khan, a <mark>Frontend</mark> Developer & <mark>UI/UX</mark> Designer</h3>
              <p>
                I am passionate about creating user-friendly interfaces and enjoy tackling new challenges. I strive for excellence in everything I do. Beyond coding, I find joy in exploring new places, capturing moments, and reading books and novels.
              </p>

              {/* Achievements Section */}
              <div className='section'>
                <div className='subheading' onClick={() => toggleSection('achievements')}>
                  <span>Key Achievements</span>
                  <span>{openSection === 'achievements' ? '-' : '+'}</span>
                </div>
                {openSection === 'achievements' && (
                  <ul>
                    <li>Math Quiz Medalist: Awarded for exceptional analytical skills in 10th grade.</li>
                    <li>Kho-Kho Prize Winner: Recognized for teamwork and strategic thinking.</li>
                    <li>Best Student Award: Honored in college for outstanding academic and leadership qualities.</li>
                  </ul>
                )}
              </div>

              {/* Hobbies/Interests Section */}
              <div className='section'>
                <div className='subheading' onClick={() => toggleSection('interests')}>
                  <span>Hobbies & Interests</span>
                  <span>{openSection === 'interests' ? '-' : '+'}</span>
                </div>
                {openSection === 'interests' && (
                  <p>
                    Beyond coding, I am an avid reader and gamer. These hobbies fuel my creativity, help me relax, and provide fresh perspectives that I bring into my work as a developer.
                  </p>
                )}
              </div>

              {/* Goals Section */}
              <div className='section'>
                <div className='subheading' onClick={() => toggleSection('goals')}>
                  <span>Future Goals</span>
                  <span>{openSection === 'goals' ? '-' : '+'}</span>
                </div>
                {openSection === 'goals' && (
                  <p>
                    I am focused on advancing my front-end development skills, particularly in emerging technologies, with the goal of enhancing user experiences and contributing to innovative projects.
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
