import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-md fixed-top">
  <a className="navbar-brand" href="/">LYLE FRANKLIN</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="resume">Resume</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="about">About</a>
      </li>
    </ul>
  </div>
  </nav>
)

export default Header
