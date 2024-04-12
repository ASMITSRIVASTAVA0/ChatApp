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
// used for code-splitting,i.e. 
// only load then when needed(route pr req bheji)

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
const NotFound=lazy(
()=>import("./pages/NotFound.jsx")
)
// import Home from "./pages/Home.jsx";

let user=true;

import  ProtectRoute  from "./components/auth/ProtectRoute.jsx";
// ProtectRoute user-defined component
// isse agar user login nhi h(user==false) to redirect to "/login"
// agar h to ProtectRoute k jo child component hoga


const App = () => {
  return (
    <BrowserRouter>

        <Routes>

          {/* <Route path="/asmit" element={<ProtectRoute user={user}/>}> */}
          <Route element={<ProtectRoute user={user} /*redirect='/groups'*/ />}>
          {/* ProtectRoute ke 3 child, one of them render hoga */}
          {/* samajh lo wrap kiya routes ko ,jb 3 child ke routes me req to pehle ProtectRoute jayega */}


            <Route path="/" element={<Home/>}/>
            <Route path="/chat/:chatId" element={<Chat/>}/>
            <Route path="/groups" element={<Groups/>}/>

          </Route>

          {/* <Route path="/login" element={<Login/>}/> */}
          <Route
            path="/login"
            element={

              <ProtectRoute user={!user} redirect="/">

                <Login/>

              </ProtectRoute>

            }
          />

          {/* Not found */}
          <Route path="*" element={<NotFound/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App

