import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./index.css"
import App from './App.jsx'

import { LoaderProvider } from './Contexts/LoaderContext.jsx'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
import { LoginProvider } from './Contexts/LoginContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LoaderProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </LoaderProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
