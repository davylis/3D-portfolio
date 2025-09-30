import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import StarsCanvas from './components/Stars';
import Preloader from './components/Preloader';
import { d_logo } from './assets'
import Cursor from './components/Cursor';

function App() {

  return (
    <>
      <Preloader
        element={<img src={d_logo} alt="Preloader Logo" style={{ borderRadius: '50px' }} />}
        seconds={3}
      />
      <BrowserRouter>
        <div className="z-0 min-h-screen w-full" >
          <div className="bg-hero-pattern bg-cover bg-center" >
            <Cursor />
            <Navbar />
            <Hero />
          </div>
          <div className="relative z-0 w-screen bg-primary bg-center min-h-screen">
            <StarsCanvas />
            <About />
            <Experience />
            <Works />
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
