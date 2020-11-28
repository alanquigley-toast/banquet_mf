import { BanquetDevTools } from '@toasttab/banquet-tools'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.css'

ReactDOM.render(
  <div>
    <BanquetDevTools />
    <App />
  </div>,
  document.getElementById('root')
)
