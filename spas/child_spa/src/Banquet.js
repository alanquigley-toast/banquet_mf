import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import App from './App'
import './index.css'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return <p>{err}</p>
  }
})

export const { bootstrap, mount, unmount } = lifecycles
