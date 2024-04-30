import React from 'react'
import ReactDOM from 'react-dom/client'
// ReactDOm used to render react elem into dom

import ChatApp from './ChatApp.jsx'
// import './index.css'

import {CssBaseline} from "@mui/material"
// apply baseline css style to your application
// et first margin padding khatam font size,etc change a little

// import * as MUI from "@mui/material"

import {HelmetProvider} from "react-helmet-async"
import { BrowserRouter, Routes,Route } from 'react-router-dom'

// react-helmet library allow to manage document head tags
// line <title> <meta> <link>
// helmet provider serves as content provider
// helmet provider enable asynchronous behaviour 
// for managing documents head
// this means you can dynamically change the content 
// of head tags based on state or probs

// helmetprovider
{/* not a visiual component,wrap app,perform addition check,warning */}
    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* agar helment provider nhi to routes me dynamice import me dikkat */}
    <HelmetProvider>
      <CssBaseline/>
      <div 
      // onContextMenu={event=>event.preventDefault()}
      >
        <ChatApp />
      </div>
      
    </HelmetProvider>
    {/* <>
    <HelmetProvider>
        <BrowserRouter>

            <Routes>
                <Route path="/app" element={<App/>}/>
                <Route path="/" element={<ChatApp/>} />
            </Routes>
        </BrowserRouter>
    </HelmetProvider>
    </>
     */}
    
  </React.StrictMode>,
)
