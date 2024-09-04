import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Ensure CSS is imported

const SmoothScrollComponent = () => {
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
    <div data-scroll-container>
      {/* Your content here */}
      <section data-scroll data-scroll-speed="2">
        <h1>Smooth Scrolling with Locomotive Scroll</h1>
      </section>
      <section data-scroll>
        <p>Another section</p>
      </section>
    </div>
  );
};

export default SmoothScrollComponent;
