import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand fixed-top">
  <Link className="navbar-brand" to="/">LYLE FRANKLIN</Link>

  <div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link activeClassName="active" className="nav-link" to="/resume">Resume</Link>
      </li>
      <li className="nav-item">
        <Link activeClassName="active" className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  </div>
  </nav>
)

export default Header
