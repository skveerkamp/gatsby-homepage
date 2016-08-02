import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <h1>
            Hi people
          </h1>
          <p>Welcome to your new Gatsby site</p>
          <h2>Below are some pages showing different capabilities built-in to Gatsby</h2>
          <h3>Supported file types</h3>
          <ul>
            <li>
              <Link to={prefixLink('/markdown/')}>Markdown</Link>
            </li>
            <li>
              <Link to={prefixLink('/react/')}>JSX (React components)</Link>
            </li>
          </ul>
          <h3>Supported CSS processors</h3>
          <ul>
            <li>
              <Link to={prefixLink('/less/')}>Less</Link>
            </li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
