import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from './components/pages/Projects'
import ProjectDisplay from './components/pages/ProjectDisplay'
import Home from './components/pages/Home'
import Experience from './components/pages/Experience'
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
        <Route path="/projects/:id" element={<ProjectDisplay />} />
        <Route path = '/experience' element={<Experience />}></Route>

        </Routes>
        <Footer/>
    </Router>
    
    </div>
   
  )
}

export default App