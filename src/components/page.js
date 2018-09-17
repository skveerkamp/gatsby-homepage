import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './page.css'

/* adapted from: https://github.com/hochem/gatsby-animation-example */
class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const {children} = this.props;
    return (
      <div className='sliding-container'>
        {children}
      </div>
    );
  }
}

const Page = ({ children, location }) => (
  <div>
    <TransitionGroup>
      <CSSTransition
          key={location.pathname}
          timeout={{ enter: 500, exit: 500 }}
          classNames='sliding'
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
            {children}
          </div>
        </TransitionHandler>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

export default Page
