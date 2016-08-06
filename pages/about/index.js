import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class AboutComponent extends React.Component {
  render () {
    return (
      <DocumentTitle title={`${config.siteTitle} | About`}>
        <h1>About!</h1>
      </DocumentTitle>
    )
  }
}
