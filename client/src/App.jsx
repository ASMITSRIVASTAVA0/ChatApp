import React from 'react'

import MainHeader from './appcomponents/layout/MainHeader.jsx'

import AppLayout from './appcomponents/layout/AppLayout.jsx'
import Post from "./appcomponents/specifics/post/post.jsx"
const App = () => {
  return (
    <>
    {/* <SearchDialog/> */}
    {/* <Header/> */}
    <MainHeader />

    <AppLayout/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>

    </>
  )
}

export default App