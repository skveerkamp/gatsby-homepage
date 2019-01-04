import React from 'react'
import Link from 'gatsby-link'

import StaggeredList from '../components/staggeredList'

const IndexPage = () => (
  <div>
  <main role="main">


  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">Lyle Franklin</h1>
      <p>Staff software engineer @ Pivotal Cloud Foundry</p>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commod. </p>
      </div>
      <div className="col-md-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum m porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      </div>
      <div className="col-md-4">
        <h2>Heading</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      </div>
    </div>

    <hr/>

  </div>

</main>

<footer class="container">
  <p>&copy; Company 2017-2018</p>
</footer>
</div>
)

export default IndexPage
