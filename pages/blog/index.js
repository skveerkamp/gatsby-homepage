import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import sortBy from 'lodash/fp/sortBy'
import filter from 'lodash/fp/filter'
import flow from 'lodash/fp/flow'
import reverse from 'lodash/fp/reverse'

export default class BlogComponent extends React.Component {
  render () {
    const blogPages = flow([
      filter(page => page.path.match(/\/blog\/.+/)),
      sortBy(page => page.data.date),
      reverse
    ])(this.props.route.pages)

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
