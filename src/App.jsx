import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
function App() {


  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
      </main>
    </>
  )
}

export default App
