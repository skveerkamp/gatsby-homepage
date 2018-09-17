import React from 'react'
import PropTypes from 'prop-types'
import withRouter from 'react-router-dom/withRouter'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Page from '../components/page'
import './index.css'
import './loader.css'

const Layout = ({ children, location, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className='main'>
      <Page location={location}>
        {children()}
      </Page>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default withRouter(Layout)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
