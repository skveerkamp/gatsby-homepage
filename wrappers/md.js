import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

const Sidebar = React.createClass({
  propTypes () {
    return {
      post: React.PropTypes.object,
    }
  },
  render: function() {
    const post = this.props.post
    if (!post.sidebar) {
      return null
    }
    var sidebarItems = []
    const regex = /<a[^>]*id="([\w\-]+)"/g
    var matches;
    while ((matches = regex.exec(post.body)) !== null) {
      const anchorID = matches[1]
      const anchorHREF = "#" + anchorID
      sidebarItems.push(
        <div key={anchorID}>
          <a href={prefixLink(anchorHREF)}>{anchorID}</a>
        </div>
      )
    }
    return (
      <div className="row">
        <div className="sidebar col-xs-2">
          {sidebarItems}
        </div>
        <div className="col-xs-10">
        {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    var cover = ''
    if (post.cover) {
      cover = <img src={post.cover} className="hero-image"/>
    }
    return (
      <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
        <div className="markdown">
          <Sidebar post={post}>
            {cover}
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </Sidebar>
        </div>
      </DocumentTitle>
    )
  },
})
