import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import {CssBaseline} from "@mui/material"
// apply baseline css style to your application
// et first margin padding khatam font size,etc change a little

// import * as MUI from "@mui/material"

import {HelmetProvider} from "react-helmet-async"

// react-helmet library allow to manage document head tags
// line <title> <meta> <link>
// helmet provider serves as c context provider
// helmet provider enable asynchronous behaviour for managing documents head
// this means you can dynamically change the content of head tags based on state or probs

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <HelmetProvider>
      {/*CssBaseline sare elem me kuc css add krta */}
      <CssBaseline/>
      <App />
    </HelmetProvider>
    
  </React.StrictMode>,
)
