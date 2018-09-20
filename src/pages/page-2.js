import React from 'react'
import Link from 'gatsby-link'

import StaggeredList from '../components/staggeredList'

const SecondPage = () => (
  <StaggeredList>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </StaggeredList>
)

export default SecondPage
