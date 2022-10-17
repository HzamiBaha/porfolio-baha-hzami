import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Service from './components/services/Service'
import Qualification from './components/qualifications/Qualification'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'
import Work from './components/work/Work'
function App() {


  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Service/>
        <Qualification/>
        <Work/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </main>
      <Scrollup/>
    </>
  )
}

export default App
