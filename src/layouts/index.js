import React from 'react'
import PropTypes from 'prop-types'
import withRouter from 'react-router-dom/withRouter'
import Helmet from 'react-helmet'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from '../components/header'
import './index.css'

class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const {children} = this.props;
    return (
      <div className="transition-container">
        {children}
      </div>
    );
  }
}


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
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
    <TransitionGroup>
      <CSSTransition
          key={location.pathname}
          classNames="example"
          timeout={{ enter: 500, exit: 500 }}
      >
        <TransitionHandler
            location={location}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children()}
          </div>
        </TransitionHandler>
      </CSSTransition>
    </TransitionGroup>
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
