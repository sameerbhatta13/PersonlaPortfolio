import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyRoutes from '../MyRoutes'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import About from './components/About'
import Services from './components/Services'
import MyProject from './components/MyProject'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Services />
      <MyProject />
      <Contact />
      <Footer />
    </>
  )
}

export default App
