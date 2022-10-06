import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Computer from '@material-ui/icons/Computer'
import '../../styles/Experience.css'
import mashreq from '../../assets/mashreq.jpeg'
import yvr from '../../assets/YVR_Logo.jpeg'
import awsCIC from '../../assets/awsCIC.png'
import { Button } from '@material-ui/core'

function Experience() {
  return (
    <div>
      <div className='work-experience'>
        <VerticalTimeline lineColor='#3e497a'>
          <VerticalTimelineElement className='vertical-timeline-element-w'
            date='2022 January - 2022 August'
            dateClassName='date-style'
            iconStyle={{ background: '#FF8919', color: '#fff' }}
            icon={<Computer />}>
            <h3 className='vertical-timeline-element-title-w'> UBC & AWS: Cloud Innovation Center</h3>
            <img src={awsCIC} width="370" height="270" />
            <p>  <span style={{ fontWeight: "normal" }}>
              Worked with AWS engineers to co-design, deploy and document an open source, IoT based, web platform
              for three health foundations that support individuals with Autism Spectrum Disorder.
            </span> </p>
            <p>  <span style={{ fontWeight: "normal" }}> Utilized multiple AWS services
              (Lambda, AppSync, S3, Athena, DynamoDB and API Gateway) to develop backend and frontend features
              that collect and integrate data from wearable and environmental sensors into a single UI.</span> </p>
            <Button variant="outlined" color='secondary' fullWidth='true' href='https://github.com/UBC-CIC/health-platform'>View Source</Button>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element-w'
            date='2021 September - 2021 December'
            dateClassName='date-style'
            position='right'
            iconStyle={{ background: '#859e29', color: '#fff' }}
            icon={<Computer />}>

            <h3 className='vertical-timeline-element-title'> Vancouver Airport Authority</h3>
            <br></br>
            <img src={yvr} width="355" height="170" />
            <p>  <span style={{ fontWeight: "normal" }}>
              Worked with the Innovative Travel Solutions team, in an agile environment to develop
              features for YVR’s Digital Twin MVP delivered by Unity.
            </span> </p>
            <p>  <span style={{ fontWeight: "normal" }}>
              Used Unity, .NET and C# to develop,
              refactor and debug MVP features pertaining to user input, build pipeline, UI design,
              and YVR’s backend data services.
            </span> </p>

          </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element-w'
            date='2021 May - 2021 August'
            dateClassName='date-style'
            iconStyle={{ background: 'rgb(253, 110, 14)', color: '#fff' }}
            icon={<Computer />}>
            <h3 className='vertical-timeline-element-title'> Mashreq Bank</h3>
            <img src={mashreq} width="300" height="170" />

            <p>  <span style={{ fontWeight: "normal" }}>
              Part of the agile team tasked with facilitating Mashreq's digitial transformation.
              Utilized Node.js, TypeScript and MJML to dynamically generate HTML templates for an array of banking services such as
              wealth management, fund transfers and motor/life/travel insurance products.
            </span> </p>
            <p>  <span style={{ fontWeight: "normal" }}>
              Worked in close coordination with the product owner and front-end lead to develop a CLI application that can create email,
              SMS and push notification templates for thousands of Mashreq Gold Customers.
            </span> </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience

