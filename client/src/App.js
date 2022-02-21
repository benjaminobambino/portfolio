import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
