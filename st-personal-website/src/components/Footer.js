import React from 'react'
import { LinkedIn, GitHub} from '@material-ui/icons'
import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <LinkedIn/>
        <GitHub/>
        </div>
        <p> &copy; 2022 shreyt.com</p>
        </div>
      
  ) 
}

export default Footer