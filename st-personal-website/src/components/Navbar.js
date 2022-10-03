import React, { useState, useEffect } from 'react'
import "../styles/Navbar.css"
import {Link, useLocation} from 'react-router-dom'
import Reorder from '@material-ui/icons/Reorder'

function Navbar() {

    const [expandNavbar, setExpandNavBar] = useState(false)

    const location = useLocation();

    useEffect(() => {
     setExpandNavBar(false);
    }, [location])
    

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavBar((prev) => !prev)}}> 
            <Reorder/>
            </button>
        </div>
     
    <div className='links'>
    {/* <div style={{border: '2px solid red'}}> */}
    <Link to='/'>About Me</Link>
    {/* </div> */}
    <Link to='/projects'>Technical Experience and Projects</Link>
    <Link to='/experience'>Work Experience</Link>

    </div>
    </div>
  )
}

export default Navbar