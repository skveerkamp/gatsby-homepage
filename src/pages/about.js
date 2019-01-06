import React from 'react'
import music from "../images/music.jpg"
import movie from "../images/movie.jpg"
import book from "../images/book.jpg"
import bgame from "../images/bgame.jpg"
import vgame from "../images/vgame.jpg"
import hobby from "../images/hobby.jpg"

const AboutPage = () => (
  <div>
  <div className="jumbotron jumbotron-about">
  </div>
  <div className="container margin-bottom-1">
  <div className="row">
  <div className="col-md-12">
    <h3 className="main-title header-margin-2">About</h3>
      <h4>I'm a generalist engineer with a focus on distributed systems and automation.</h4>
      <p>I currently work as a Staff Software Engineer at <a target="_blank" rel="noopener noreferrer" href="https://pivotal.io/">Pivotal Software</a> where I help build <a target="_blank" rel="noopener noreferrer" href="https://www.cloudfoundry.org/">Cloud Foundry</a>,
      an open source Platform-as-a-Service.</p>

    <p>I enjoy hacking on interesting projects like a <a target="_blank" rel="noopener noreferrer" href="https://github.com/ljfranklin/k8s-pi">Kubernetes Cluster on Raspberry Pi</a>, teaching technical concepts during Engineering Onboarding week, or making overly long videos about <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/yzz3bcnWf7M">networking protocols</a>.</p>
    </div>
    </div>
    <div className="row">
    <div className="col-md-12">
    <h5 className="margin-bottom-1">Faves outside the office:</h5>
    </div>
    </div>

    <div className="row hobbies">

      <div className="col-md-4">
        <div className="row">
          <div className="col-md-4">
            <img src={music} alt="metal vocalist" />
          </div>
          <div className="col-md-8">
            <h5>Music</h5>
              <p>Metal</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="row">
          <div className="col-md-4">
        <img src={movie} alt="sprited away movie" />
          </div>
          <div className="col-md-8">
          <h5>Movie</h5>
          <p>Spirited Away</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="row">
          <div className="col-md-4">
        <img src={book} alt="Neuromancer" />
          </div>
          <div className="col-md-8">
          <h5>Book</h5>
          <p>Neuromancer</p>
          </div>
        </div>
      </div>
</div>


  <div className="row hobbies">

  <div className="col-md-4">
    <div className="row">
      <div className="col-md-4">
    <img src={vgame} alt="Super Meat Boy" />
      </div>
      <div className="col-md-8">
      <h5>Video Game</h5>
      <p>Super Meat Boy</p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="row">
      <div className="col-md-4">
    <img src={bgame} alt="Pandemic Legacy" />
      </div>
      <div className="col-md-8">
      <h5>Board Game</h5>
      <p>Pandemic Legacy</p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="row">
      <div className="col-md-4">
    <img src={hobby} alt="woodworking" />
      </div>
      <div className="col-md-8">
      <h5>Hobby</h5>
      <p>Woodworking</p>
      </div>
    </div>
  </div>

    </div>
    </div>
  </div>
)

export default AboutPage
