import React from 'react'
import './App.scss'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import { Footer } from './Footer/Footer'
// import vi_1 from '../src/assets/vi_1.mp4'

const App = () => {
  return (
    <>
      
      {/* <Navbar /> */}
      <div style={{overflowX : "hidden"}}>
      <Hero  />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      </div>
    
    </>
  )
}

export default App