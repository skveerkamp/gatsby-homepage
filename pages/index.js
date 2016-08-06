import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Pages from 'utils/pages'
import 'css/style.less'

import fuzzyFriend from './images/corgi.jpg'

export default class Index extends React.Component {
  render () {
    const pages = new Pages(this.props.route.pages)
    const workPages = pages.filter(/\/work\/.+/)
    const blogPages = pages.filter(/\/blog\/.+/)

    const workItems = []
    workPages.forEach(page => {
      const title = page.data.title
      workItems.push(
        <li key={title}>
          <Link to={prefixLink(page.path)}>{title}</Link>
        </li>
      )
    })
    const blogItems = []
    blogPages.forEach(page => {
      const title = page.data.title
      blogItems.push(
        <li key={title}>
          <Link to={prefixLink(page.path)}>{title}</Link>
        </li>
      )
    })

    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <h1>
            C'est la vie...
          </h1>
          <img src={fuzzyFriend} className="hero-image"/>
          <ul>
            <li>
              <Link to={prefixLink('/work/')}>Work</Link>
              <ul>
                {workItems}
              </ul>
            </li>
            <li>
              <Link to={prefixLink('/blog/')}>Blog</Link>
              <ul>
                {blogItems}
              </ul>
            </li>
            <li>
              <Link to={prefixLink('/about/')}>About</Link>
            </li>
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
