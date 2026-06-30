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
import AuthPage from './Pages/AuthPage'
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer'
import BlogList from './Pages/BlogList'
import ScrollTotop from './Components/ScrollTotop'
import HrPortal from './Components/HrPortal'
import Contact from './Pages/Contact'
import OurServices from './Pages/OurServices'
import SipCalculator from './Pages/SipCalculator'
import WhySEO from './Pages/WhySEO'
import LandingPage from './Pages/LandingPage'
import InfluencerPage from './Pages/InfluencerPage'
import IndustriesWeWorkWith from './Pages/IndustriesWeWorkWith'
import Carrer from './Pages/Carrer'


function App() {


  return (
    <>
    <Navbar />
    <ScrollTotop />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/resume-builder' element={<ResumeBuilder/>}></Route>
        <Route path='/TemplateSelect' element={<TemplateSelect/>}></Route>
        <Route path='/PortfolioMaker' element={<PortfolioMaker/>}></Route>
        <Route path='/jobportal' element={<JobPortal/>}></Route>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Ourservices' element={<OurServices/>}/>
        <Route path='/blog' element={<BlogList/>}/>
        <Route path='/Hrportal' element={<HrPortal/>}/>
        <Route path='/SIPCalculator' element={<SipCalculator/>}/>
        <Route path='/WhySEO' element={<WhySEO/>}/>
        <Route path='/landingpage' element={<LandingPage/>}/>
        <Route path='/influencer-form' element={<InfluencerPage/>}/>
        <Route path='/industries' element={<IndustriesWeWorkWith/>}/> 
        <Route path='/Career' element={<Carrer/>}/> 
       
      </Routes>
      <Footer />
    </>
  )
}

export default App
