import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
)
