import React from 'react'
import Link from 'gatsby-link'
import cover from "../images/astro2.svg"

import StaggeredList from '../components/staggeredList'

const IndexPage = () => (
<div>

  <div className="jumbotron">
    <div className="jumbotron-inner container">
      <h1 className="display-3">Lyle Franklin</h1>
      <p>Staff software engineer @ Pivotal Cloud Foundry</p>
      <img src={cover} alt="astronaut image" />
    </div>
  </div>

  <div className="container">
  <h3>Projects</h3>
    <div className="row">
      <div className="col-md-4">
      <div className="margin-bottom-3">
        <Link className="title-link">Tour of TLS</Link>
        <p className="date">March 3, 2018</p>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commod. </p>
      </div>
      </div>
      <div className="col-md-4">
      <div className="margin-bottom-3">
        <Link className="title-link">Notes: Essential System Admin</Link>
        <p className="date">March 3, 2018</p>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum m porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      </div>
      </div>
      <div className="col-md-4">
      <div className="margin-bottom-3">
        <Link className="title-link">Notes: Site Reliability Engineering</Link>
        <p className="date">March 3, 2018</p>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
      <div className="margin-bottom-3">
        <Link className="title-link">Tour of TLS</Link>
        <p className="date">March 3, 2018</p>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commod. </p>
      </div>
      </div>
      <div className="col-md-4">
      <div className="margin-bottom-3">
        <Link className="title-link">Notes: Essential System Admin</Link>
        <p className="date">March 3, 2018</p>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum m porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      </div>
      </div>
      <div className="col-md-4">
      <div className="margin-bottom-3">
        <Link className="title-link">Notes: Site Reliability Engineering</Link>
        <p className="date">March 3, 2018</p>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
      <div className="margin-bottom-3">
        <Link className="title-link">Tour of TLS</Link>
        <p className="date">March 3, 2018</p>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commod. </p>
      </div>
      </div>
      <div className="col-md-4">
      <div className="margin-bottom-3">
        <Link className="title-link">Notes: Essential System Admin</Link>
        <p className="date">March 3, 2018</p>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum m porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      </div>
      </div>
      <div className="col-md-4">
      <div className="margin-bottom-3">
        <Link className="title-link">Notes: Site Reliability Engineering</Link>
        <p className="date">March 3, 2018</p>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      </div>
      </div>
    </div>
  </div>
</div>
)

export default IndexPage
