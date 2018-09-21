import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Transition from "../components/transition"
import Header from '../components/header'
import { StaticQuery, graphql } from 'gatsby'

import './loader.css'
import './layout.css'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='main' style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Transition location={location}>{children}</Transition>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
