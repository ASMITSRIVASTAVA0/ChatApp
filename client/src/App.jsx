import React from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom";


// BrowserRouter=
//    provide routing functionality by managing browser's URL and rendering component based on URL
// Routes=
//    act as container for individual Route Components
// Route=
//    component to define route


import {lazy} from "react"

// lazy FUNCTION allows to dynamically import react components
// used for code-splitting,i.e. only load then when needed(route pr req bheji)
const Home=lazy(
()=>import("./pages/Home.jsx")
);
const Login=lazy(
()=>import("./pages/Login.jsx")
)
const Groups=lazy(
()=>import("./pages/Groups.jsx")
)
const Chat=lazy(
()=>import("./pages/Chat.jsx")
)
// import Home from "./pages/Home.jsx";

let user=true;

import  ProtectRoute  from "./components/auth/ProtectRoute.jsx";

const App = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route element={<ProtectRoute/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat/:chatId" element={<Chat/>}/>
            <Route path="/groups" element={<Groups/>}/>
          </Route>

        </Routes>

          
          
          
          {/* agar same path to pehle wala chlega */}

            {/* <Route path="/" element={<Home/>}/> */}

            < Route 
            path="/" 
            element={
              <ProtectRoute user={user}>
                <Home/>
              </ProtectRoute>
            }
            />


            <Route path="/chat/:chatId" element={<Chat/>}/>
            {/* :chatid dena compulsary  */}
            <Route path="/groups" element={<Groups/>}/>
            {/* home lazy function se return hua, dynamic loading */}
            <Route path="/login" element={<Login/>}/>
            
        </Routes>

    </BrowserRouter>
  )
}

export default App