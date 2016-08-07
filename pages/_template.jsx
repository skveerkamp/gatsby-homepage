import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <div className="navbar row">
          <div className="container col-xs">
            <Link to={prefixLink('/')}>
              Lyle's Homepage
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xs">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  },
})
