import React from 'react'
import { Container } from 'react-responsive-grid'
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
        <div className="navbar">
          <Container className="container"
            style={{
              maxWidth: 960,
            }}
          >
            <Link to={prefixLink('/')}>
              Lyle's Homepage
            </Link>
          </Container>
        </div>
        <Container
          style={{
            maxWidth: 960,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
