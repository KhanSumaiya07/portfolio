import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const SmoothScrollComponent = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true, // Enables smooth scrolling
    });

    return () => scroll.destroy(); // Cleanup on component unmount
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
