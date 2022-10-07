import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from './components/pages/Projects'
import Home from './components/pages/Home'
import WorkExperience from './components/pages/WorkExperience'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (

    <div className='App'> 
    <Router>
      <Navbar/>
        <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/projects' element={<Projects />}></Route>
        <Route path = '/experience' element={<WorkExperience />}></Route>
        </Routes>
        <Footer/>
    </Router>
    
    </div>
   
  )
}

export default App

