import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar/navbar";
import Home from "./component/homepage/Home";
import About from "./component/about_me/about";
import Skills from "./component/skills/skills";
import Project from "./component/projects/Project";
import Experience from "./component/experience/Experience";
import Education from "./component/Education/Education";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Navbar />
        <Home />
        <div id="scrolling-container">
          <About />
          <Skills />
          <Project />
          <Experience />
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
