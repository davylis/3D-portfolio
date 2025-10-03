import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Suspense, lazy } from 'react';
import { d_logo } from './assets';
import Cursor from './components/Cursor';
import { usePerformance } from './components/PerformanceChecker';

const Preloader = lazy(() => import("./components/Preloader"));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));
const StarsCanvas = lazy(() => import('./components/Stars'));

function App() {
  const isHighPerformance = usePerformance();

  return (
    <>
      <Preloader
        element={<img src={d_logo} alt="Preloader Logo" style={{ borderRadius: '50px' }} />}
        seconds={2}
      />
      <BrowserRouter>
        <div className="z-0 min-h-screen w-full">
          <div className="bg-hero-pattern bg-cover bg-center">
            {isHighPerformance && <Cursor />}
            <Navbar />
            <Hero />
          </div>
          <div className="relative z-0 w-screen bg-primary bg-center min-h-screen">
            {isHighPerformance && (
              <Suspense fallback={<p>Loading Stars...</p>}>
                <StarsCanvas />
              </Suspense>
            )}
            <Suspense fallback={<p>Loading About...</p>}>
              <About />
            </Suspense>
            <Suspense fallback={<p>Loading Experience...</p>}>
              <Experience />
            </Suspense>
            <Suspense fallback={<p>Loading Works...</p>}>
              <Works />
            </Suspense>
            <Suspense fallback={<p>Loading Contact...</p>}>
              <Contact />
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
