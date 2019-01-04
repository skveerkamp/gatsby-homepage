import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand fixed-top">
  <a className="navbar-brand" href="/">LYLE FRANKLIN</a>

  <div>
    <ul className="navbar-nav">
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
