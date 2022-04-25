import React from 'react'
import './work.css'
function Work() {
  return (
    <div className='work'>
            <h3 style={{color:'red', fontSize:"20px",textDecoration:'underline' }}>Professional Experience</h3>
            <h4 id="company-name">Formplus</h4>
            <p id="job-title"><strong>Support Engineer (Technical Support)</strong></p>
            <p id="job-responsibilities">Job Responsbilities</p>
            
            <ul>
                <li>Answer customer queries over email / ticketing system</li>
                <li>Interact with our engineering team to get software issues and bugs resolved</li>
                <li>Occasionally interact with customers over intrecom and email</li>
                <li>Contribute ideas to the team on how customers can be delighted</li>
            </ul>
    </div>
  )
}

export default Work