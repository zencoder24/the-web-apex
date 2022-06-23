import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

function App() {
  return (
    <>
      <section className='header relative h-screen bg-hero-image bg-center bg-cover bg-no-repeat bg-fixed overflow-hidden'>
        <Navbar/>
        <HeroSection/>
      </section>
      <AboutSection/>
      <ProjectsSection/>
    </>
  );
}

export default App;
