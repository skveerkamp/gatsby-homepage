import React from 'react'
import Link from 'gatsby-link'
import Page from '../components/page'

const IndexPage = () => (
	<Page>
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<Link to="/page-2/">Go to page 2</Link>
	</Page>
)

export default IndexPage
