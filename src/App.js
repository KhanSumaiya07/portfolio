import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import Home from './component/homepage/Home';
import About from './component/about_me/about';
import Skills from './component/skills/skills';
import Project from './component/projects/Project';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <Project/>
      </div>
    </div>
  );
}

export default App;
