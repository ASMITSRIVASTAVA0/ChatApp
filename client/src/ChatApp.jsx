import React, { Suspense } from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom";


// BrowserRouter=
//    provide routing functionality by managing browser's URL and rendering component based on URL
// Routes=
//    act as container for individual Route Components
// Route=
//    component to define route

// suspense=
//    used with lazy() for dynamic loading component

import {lazy} from "react"

// lazy FUNCTION allows to dynamically import react components
// used for code-splitting,i.e. 
// only load then when needed(route pr req bheji)

import {LayoutLoader} from "./components/layout/Loaders.jsx";

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
const App=lazy(
  ()=>import("./App.jsx")
)
// import Home from "./pages/Home.jsx";

let user=true;
// let user=false;

import  ProtectRoute  from "./components/auth/ProtectRoute.jsx";
// ProtectRoute user-defined component
// isse agar user login nhi h(user==false) to redirect to "/asmitpath"
// agar h to ProtectRoute k jo child component hoga


const ChatApp = () => {
  return (
    <BrowserRouter>

      {/* <Suspense fallback={<div>loading...</div>}> */}
      <Suspense fallback={<LayoutLoader/>}>
        <Routes>

          
          <Route path="/app" element={<App/>}/>
            
          {/* <Route path="/asmit" element={<ProtectRoute user={user}/>}> */}
          <Route element={<ProtectRoute user={user} /*redirect='/groups'*/ />}>
          {/* ProtectRoute ke 3 child, one of them render hoga */}
          {/* samajh lo wrap kiya routes ko ,jb 3 child ke routes me req to pehle ProtectRoute jayega */}

            {/* <Route path="/app" element={<App/>}/> */}
            <Route path="/chat/home" element={<Home/>}/>
            <Route path="/chat/chats/:chatId" element={<Chat/>}/>
            <Route path="/chat/groups" element={<Groups/>}/>

          </Route>

          <Route element={<ProtectRoute user={!user}/>}>

            <Route path="/login" element={<Login/>}/>

          </Route>

          {/* Not found */}
          <Route path="*" element={<NotFound/>}/>

        </Routes>

      </Suspense>
    </BrowserRouter>
  )
}

export default ChatApp

