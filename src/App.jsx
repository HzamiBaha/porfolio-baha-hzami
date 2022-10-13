import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Service from './components/services/Service'
import Qualification from './components/qualifications/Qualification'
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
      </main>
    </>
  )
}

export default App
