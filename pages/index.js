import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Pages from 'utils/pages'

import 'css/flexboxgrid.css'
import 'css/style.less'

import fuzzyFriend from './images/corgi.jpg'

export default class Index extends React.Component {
  render () {
    const pages = new Pages(this.props.route.pages)
    const workPages = pages.filter(/\/work\/.+/)
    const blogPages = pages.filter(/\/blog\/.+/)

    var Tile = React.createClass({
      render: function() {
        const page = this.props.page
        const title = page.data.title
        var cover = ''
        if (page.data.cover) {
          cover = <img src={page.data.cover} width="100px"/>
        }
        return (
          <div key={title} className="col-xs">
            {cover}
            <Link to={prefixLink(page.path)}>{title}</Link>
          </div>
        )
      }
    })

    const workItems = []
    workPages.forEach(page => {
      workItems.push(
        <Tile key={page.path} page={page}></Tile>
      )
    })
    const blogItems = []
    blogPages.forEach(page => {
      blogItems.push(
        <Tile key={page.path} page={page}></Tile>
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
              <div className="row">
                {workItems}
              </div>
            </li>
            <li>
              <Link to={prefixLink('/blog/')}>Blog</Link>
              <div className="row">
                {blogItems}
              </div>
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
