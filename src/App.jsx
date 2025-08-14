import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {

  return (
    <>
    <BrowserRouter>
      <div className="relative z-0 bg-primary" >
        <div className="bg-hero-pattern bg-cover" >
        <Navbar/>
        <Hero/>
        <h1 className="text-red-500 text-3xl">Test</h1>
      </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
