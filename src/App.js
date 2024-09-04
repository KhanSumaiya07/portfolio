import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Ensure Locomotive Scroll CSS is imported
import Navbar from './component/navbar/navbar';
import Home from './component/homepage/Home';
import About from './component/about_me/about';
import Skills from './component/skills/skills';
import Project from './component/projects/Project';
import Experience from './component/experience/Experience';
import Education from './component/Education/Education';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';
import './App.css'; // Your custom styles

function App() {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true, // Enables smooth scrolling
    });

    // Cleanup on component unmount
    return () => scroll.destroy();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <div id="scrolling-container" data-scroll-container>
        <About />
        <Skills />
        <Project />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
