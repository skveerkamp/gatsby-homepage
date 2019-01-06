import React from 'react'

import StaggeredList from '../components/staggeredList'

const SecondPage = () => (
  <StaggeredList>
    <div className="container header-margin-2">
    <div className="row">
    <div className="col-md-8">
      <h3>Resume</h3>
      </div>
      <div className="col-md-4">
      <a class="btn btn-primary" href="https://github.com/ljfranklin/Resume-LaTeX/raw/master/resume.pdf" role="button">Download PDF</a>
      </div>
      </div>
      <div className="row header-margin-1">
        <div className="col-md-8">
          <h2 className="margin-bottom-1">Experience</h2>
          <h4>Staff Software Engineer @ Pivotal Cloud Foundry</h4>
          <div className="date margin-bottom-1">Jan '15 - Present</div>
          <h5>Engineering Lead for Release Engineering Team (2018)</h5>
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
          <h5>Engineering Lead for BOSH CPI Team (2016)</h5>
          <ul>
            <li>Developed components to deploy Cloud Foundry across AWS, GCP, vSphere, or Azure by abstracting away the infrastructure from the rest of the deployment system</li>
            <li>Created Google CPI to deploy Cloud Foundry to Google Cloud Platform and worked with Google engineers to transfer ownership of the codebase to Google</li>
          </ul>
          <h5>Engineering Lead for Core Services Team (2015)</h5>
          <ul>
            <li>Maintained the managed MySQL service for Cloud Foundry</li>
            <li>Designed and implemented a streaming backup solution to encrypt and compress backups before uploading to a blobstore</li>
          </ul>

          <h4>Extreme Blue Intern @ IBM</h4>
          <div className="date margin-bottom-1">May '14 - Aug '14</div>
          <ul>
            <li>One of only 32 hires out of 1,800 applicants (&lt;2% acceptance rate)</li>
            <li>Built system to allow non-technical users to deploy solutions to IBM's Bluemix cloud hosting service</li>
            <li>Utilized Vagrant, Docker, and Cloud Foundry to standardize development and production environments</li>
            <li>Pitched project to executives and distinguished engineers on a weekly basis</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2 className="margin-bottom-1">Education</h2>
          <h4>University of Southern California</h4>
          <h5>M.S. in Computer Science, spec. in Software Engineering</h5>
					<p>Graduated: Dec '14<br/>GPA: 4.00</p>

          <h4>Ball State University</h4>
          <h5>B.S. in Computer Science</h5>
					<p>Graduated: Dec '12<br/>GPA: 3.95</p>

          <h2 className="margin-bottom-1 header-margin-1">Skills</h2>
					<h5>Written production code with:</h5>
          <p>Go, Ruby, Bash, SQL</p>
          <h5>Played around with:</h5>
          <p>Java, JavaScript, CSS/LESS/SASS</p>
          <h5>Deployed with:</h5>
          <p>Kubernetes, Cloud Foundry, ConcourseCI, Terraform, Ansible</p>
          <h5>Deployed to:</h5>
          <p>Google Cloud, AWS, vSphere, Azure</p>
          <h5>Developed by:</h5>
          <p>Test Driven Development, Pair Programming</p>

          <h2 className="margin-bottom-1 header-margin-1">Projects</h2>
          <ul>
            <li>2-hour video explaining TLS protocol: <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/yzz3bcnWf7M">https://youtu.be/yzz3bcnWf7M</a></li>
            <li>Guide  to  deploying  Kubernetes  on Raspberry Pi: <a target="_blank" rel="noopener noreferrer" href="https://github.com/ljfranklin/k8s-pi">https://github.com/ljfranklin/k8s-pi</a></li>
            <li>Terraform  resource  for  ConcourseCI: <a target="_blank" rel="noopener noreferrer" href="https://github.com/ljfranklin/terraform-resource">https://github.com/ljfranklin/terraform-resource</a></li>
          </ul>
        </div>
      </div>
    </div>

  </StaggeredList>
)

export default SecondPage
