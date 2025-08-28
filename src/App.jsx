import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import StarsCanvas from './components/Stars';


function App() {

  return (
    <>
    <BrowserRouter>
      <div className="relative z-0 bg-primary" >
        <div className="bg-hero-pattern bg-cover" >
        <Navbar/>
        <Hero/>
        <StarsCanvas/>
        </div>
        <About/>
        <Experience/>
        <Works/>
        <div className="relative z-0">
          <Contact/>

        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
