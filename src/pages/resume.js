import React from 'react'
import Link from 'gatsby-link'

import StaggeredList from '../components/staggeredList'

const SecondPage = () => (
  <StaggeredList>
  <div className="container">
  <h3>Resume</h3>
  <div className="row">
  <div className="col-md-8">
  <h2 className="margin-bottom-1">Experience</h2>
  <h4>Staff Software Engineer @ Pivotal Cloud Foundry</h4>
  <div className="date margin-bottom-1">Jan 15' - Present</div>
  <h5>Engineering Anchor for Release Engineering Team (2018)</h5>
  <ul>
    <li>Deployed Cloud Foundry under different configurations to CI environments 50+ times each week</li>
    <li>Reduced the number of configuration file lines from 60K+ to 17K without removing functionality</li>
    <li>Designed and built a self-service system to enable teams across the organization to integrate changes</li>
  </ul>
  <h5>Engineer for Cloud Foundry API (CAPI) Team (2017)</h5>
  <ul>
    <li>Developed microservices using Go and Ruby on Rails for the Cloud Foundry Control Plane</li>
    <li>Designed a reusable system for engineers to claim an already deployed environment for manual testing, saving hours each week in wasted developer productivity across the company</li>
    </ul>
  <h5>Engineering Anchor for BOSH CPI Team (2016)</h5>
  <ul>
  <li>Developed components to deploy Cloud Foundry across AWS, GCP, vSphere, or Azure by abstracting away the infrastructure from the rest of the deployment system</li>
  <li>Created Google CPI to deploy Cloud Foundry to Google Cloud Platform and worked with Google engineers to transfer ownership of the codebase to Google</li>
  </ul>
  <h5>Engineering Anchor for Core Services Team (2015)</h5>
  <ul>
  <li>Maintained the managed MySQL service for Cloud Foundry</li>
  <li>Designed and implemented a streaming backup solution to encrypt and compress backups before uploading to a blobstore</li>
  </ul>
  </div>
  <div className="col-md-4">
  <h2>Education</h2>
  <h2>Skills</h2>
  <h2>Tools</h2>
  </div>
  </div>
  </div>

  </StaggeredList>
)

export default SecondPage
