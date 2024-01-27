import React from 'react'
import ReactDOM from 'react-dom/client'

import "./index.css"
import App from './App.jsx'

import { LoaderProvider } from './Contexts/LoaderContext.jsx'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
