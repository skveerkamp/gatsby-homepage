import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class WorkComponent extends React.Component {
  render () {
    return (
      <DocumentTitle title={`${config.siteTitle} | Work`}>
        <h1>WORK!</h1>
      </DocumentTitle>
    )
  }
}
