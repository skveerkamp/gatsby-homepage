import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => (
  <div>
    <h1>About</h1>
    <p>
      I'm a generalist engineer with a focus on distributed systems and automation.
      I currently work as a Staff Software Engineer at <a href="https://pivotal.io/">Pivotal Software</a>
      where I help build <a href="https://www.cloudfoundry.org/">Cloud Foundry</a>,
      an open source Platform-as-a-Service.
    </p>
    <p>
      I enjoy hacking on interesting projects like a <a href="https://github.com/ljfranklin/k8s-pi">
      Kubernetes Cluster on Raspberry Pi</a>, teaching technical concepts during Engineering Onboarding week,
      or making overly long videos about <a href="https://youtu.be/yzz3bcnWf7M">networking protocols</a>.
    </p>
    Some Favorites from outside of work:
    <ul>
      <li>Music: Metal</li>
      <li>Movie: Spirited Away</li>
      <li>Book: Neuromancer</li>
      <li>Video Game: Super Meat Boy</li>
      <li>Board Game: Pandemic Legacy</li>
      <li>Hobby: Woodworking</li>
    </ul>
  </div>
)

export default AboutPage
