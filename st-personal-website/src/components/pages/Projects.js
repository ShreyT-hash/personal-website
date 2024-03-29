import React from 'react'
import "../../styles/Projects.css"
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import groceryGif from '../../assets/gr.gif'
import fitnessGif from '../../assets/sqlfitness.gif'
import ledgif from '../../assets/led_lights.gif'
import DSCIgif from '../../assets/DSCI_recording.gif'
import stemviz_pic from '../../assets/stemviz_pic.png'

import sfu_devpost from '../../assets/sfu_hackathon.png'
import { Button } from '@material-ui/core'
import Computer from '@material-ui/icons/Computer'


function Projects() {
  return (
    <div className='project-experience'>

<VerticalTimeline lineColor='#3e497a'>
<VerticalTimelineElement className='vertical-timeline-element-p'
  iconStyle={{background:'#fc4903', color: '#fff'}}
  icon={<Computer/>}>
  <h3 className='vertical-timeline-element-title'> Creator of STEMViz</h3>
    <br/>
  <img src={stemviz_pic} className='project-exp-pics'/>
       <p>  <span style={{fontWeight: "normal"}}>  
       Creator of STEMViz. An online educational platform that utilizes Three Blue One Brown's Python based Mathematical Animation Engine to create 
       beautiful visualizations that teach, communicate and refresh your knowledge on complex coding concepts in under two minutes. 
        </span> </p>
        <br/>
        <Button variant="outlined" color='secondary' fullWidth='true' href='https://www.youtube.com/channel/UCLu0aFhp1qagPe6f2YwVexQ'>View YouTube Channel</Button>

       <Button style={{marginTop: "10px"}}variant="outlined" color='secondary' fullWidth='true' href='https://www.stemviz.net/'>View Website</Button>
</VerticalTimelineElement>
<VerticalTimelineElement className='vertical-timeline-element-p'
  iconStyle={{background:'#24AD1D', color: '#fff'}}
  icon={<Computer/>}>
  <h3 className='vertical-timeline-element-title'> Gym and Fitness Program Management System</h3>
    <br/>
  <img src={fitnessGif} className='project-exp-pics'/>
       <p>  <span style={{fontWeight: "normal"}}>  
       
       Worked in a group of three to create a database management system for a
       Gym that offers fitness programs for its clients. Utilized SQL, HTML/CSS and PHP
       to create a frontend that can provide comprehensive queries from a fully normalized and pre-populated Oracle database. 
        </span> </p>
        <br/>
       <Button variant="outlined" color='secondary' fullWidth='true' href='https://www.students.cs.ubc.ca/~tshrey/CPSC304Project_project_f3v2b_j8f2b_l0d9/'>View Source</Button>
</VerticalTimelineElement>

<VerticalTimelineElement className='vertical-timeline-element-p'
  iconStyle={{background:'#89CFF0', color: '#fff'}}
  icon={<Computer/>}>
  <h3 className='vertical-timeline-element-title'> K-Nearest Neighbors Classification on Banknote Data</h3>
    <br/>
  <img src={DSCIgif} className='project-exp-pics'/>
       <p>  <span style={{fontWeight: "normal"}}>  
       Analyzed a banknote dataset from the UC Irvine ML repository that enabled the computer to detect which banknotes were
forged and which ones were authentic with a 99.7% accuracy. Used data science libraries such as Tidyverse, GGally and Caret to wrangle, clean, visualize and perform a KNN classification.
        </span> </p>
        <br/>
       <Button variant="outlined" color='secondary' fullWidth='true' href='https://shreyt-hash.github.io/DSCI-100-KNN-Classification/'>View Source</Button>


</VerticalTimelineElement>
<VerticalTimelineElement className='vertical-timeline-element-p'
  iconStyle={{background:'#FF4545', color: '#fff'}}
  icon={<Computer/>}>
  <h3 className='vertical-timeline-element-title'> Sound Reactive LED Light Strip</h3>
    <br/>
  <img src={ledgif} className='project-exp-pics'/>
       <p>  <span style={{fontWeight: "normal"}}>  
       
       Used an Arduino microprocessor, an electret microphone module and the FastLED library 
       in the Arduino C++ IDE to create more than 20 different modes that cause the lights to pulsate 
       to sound and create beautiful patterns. 


        </span> </p>
        <p>
        <span style={{fontWeight: "normal"}}> 
        Utilized fast math trigonometric functions to access and iterate through CHSV, CRGB data structures 
       and display an array of 140 leds with display dynamic color palettes.
       </span>
        </p>
        <br/>
       <Button variant="outlined" color='secondary' fullWidth='true' href='https://github.com/ShreyT-hash/DIY-LED-Visualizer'>View Source</Button>


</VerticalTimelineElement>



<VerticalTimelineElement className='vertical-timeline-element-p'
  iconStyle={{background:'#8D7DEE', color: '#fff'}}
  icon={<Computer/>}>
  <h3 className='vertical-timeline-element-title'> Personal Grocery Shopping Manager</h3>
    <br/>
  <img src={groceryGif} className='project-exp-pics'/>
       <p>  <span style={{fontWeight: "normal"}}>  
       
       Created an application that allows users to keep inventory of their grocery purchases, 
       view their weekly expenses and generate a report on their consumption habits.

        </span> </p>
       <p>  <span style={{fontWeight: "normal"}}> Utilized JSwing to create a 
       functional GUI and JUnit for testing. Wrote robust methods adhering to the SOLID principles and achieved an 
       evaluation of 97% on the project. 
       </span> </p>
       <br/>
       <Button variant="outlined" color='secondary' fullWidth='true' href='https://github.com/ShreyT-hash/Grocery-Tracker'>View Source</Button>


</VerticalTimelineElement>
    <VerticalTimelineElement className='vertical-timeline-element-p'
  iconStyle={{background:'#FF8CFF', color: '#fff'}}
  icon={<Computer/>}>
  <h3 className='vertical-timeline-element-title'> SFU Hackathon: 90s Themed Tamagotchi SnapLens</h3>
    <br/>
  <img src={sfu_devpost} className='project-exp-pics'/>
       <p>  <span style={{fontWeight: "normal"}}>  
       
       Successfully used JavaScript, Lens-Studio and the Snap-Kit API to create an animated Tamagotchi snap-lens that reacts to
facial gestures.

        </span> </p>
        <br/>
       <Button variant="outlined" color='secondary' fullWidth='true' href='https://devpost.com/software/ar-tamagotchi-snaplens'>View Source</Button>


</VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
}

export default Projects;
