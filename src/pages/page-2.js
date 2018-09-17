import React from 'react'
import Link from 'gatsby-link'
import Page from '../components/page'

const SecondPage = () => (
  <Page>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
)

export default SecondPage
