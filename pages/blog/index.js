import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Pages from 'utils/pages'

export default class BlogComponent extends React.Component {
  render () {
    const pages = new Pages(this.props.route.pages)
    const blogPages = pages.filter(/\/blog\/.+/)

    const pageItems = []
    blogPages.forEach(page => {
      const title = page.data.title
      pageItems.push(
        <li key={title}>
          <Link to={prefixLink(page.path)}>{title}</Link>
        </li>
      )
    })

    return (
      <DocumentTitle title={`${config.siteTitle} | Blog`}>
        <div>
          <h1>Blog!</h1>
          <ul>
            {pageItems}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
