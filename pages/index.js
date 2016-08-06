import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import 'css/style.less'

import fuzzyFriend from './images/corgi.jpg'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <h1>
            C'est la vie...
          </h1>
          <img src={fuzzyFriend} className="hero-image"/>
          <ul>
            <li>
              <Link to={prefixLink('/markdown/')}>Markdown</Link>
            </li>
            <li>
              <Link to={prefixLink('/react/')}>JSX (React components)</Link>
            </li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
