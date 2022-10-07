import React from 'react'
import { LinkedIn, GitHub, Email, PictureAsPdf} from '@material-ui/icons'
import "../styles/Footer.css"
import { IconButton } from '@material-ui/core'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <IconButton href='https://www.linkedin.com/in/shrey-thapar/'>
            <LinkedIn/>
          </IconButton>
          <IconButton href='https://github.com/ShreyT-hash'>
            <GitHub/>
          </IconButton>
          <IconButton href='mailto:shrey.thapar.uni@gmail.com'>
            <Email/>
          </IconButton>
          <IconButton href='https://resume-host-st.s3.ca-central-1.amazonaws.com/Shrey+Thapar+Resume.pdf'>
            <PictureAsPdf/>
          </IconButton>

        </div>

      
        </div>
      
  ) 
}

export default Footer