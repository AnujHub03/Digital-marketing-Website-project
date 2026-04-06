import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ResumeBuilder from './Pages/ResumeBuilder'
import TemplateSelect from './Pages/TemplatesSelect'
import AboutUs from './Pages/AboutUs'
import JobPortal from './Pages/JobPortal'
import PortfolioMaker from './Pages/PortfolioMaker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path='/resume-builder' element={<ResumeBuilder/>}></Route>
        <Route path='/TemplateSelect' element={<TemplateSelect/>}></Route>
        <Route path='/PortfolioMaker' element={<PortfolioMaker/>}></Route>
        <Route path='/jobportal' element={<JobPortal/>}></Route>
        <Route path='/about' element={<AboutUs/>}/>
       
      </Routes>
    </>
  )
}

export default App
