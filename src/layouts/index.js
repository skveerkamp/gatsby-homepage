import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Transition from "../components/transition"
import Header from '../components/header'
import { StaticQuery, graphql } from 'gatsby'

import './loader.css'
import './layout.scss'

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
          top: '56px',
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className='loader'
      >
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700|Sarabun:700,800" rel="stylesheet"/> 
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main role='main' style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Transition location={location}>
            {children}
            <footer>
              <span>&copy; Company 2017-2018</span>
            </footer>
          </Transition>
        </main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
