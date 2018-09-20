import React from 'react'
import Link from 'gatsby-link'

import StaggeredList from '../components/staggeredList'

const IndexPage = () => (
  <StaggeredList>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </StaggeredList>
)

export default IndexPage
