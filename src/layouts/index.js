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
      <div className='top-level'>
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
        <div className='main'>
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
