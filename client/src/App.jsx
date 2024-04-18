import React from 'react'

import MainHeader from './components/layout/MainHeader.jsx'
// import Header from './components/layout/Header.jsx'
import SearchDialog from './components/specific/SearchDialog.jsx'
import AppLayout from './appcomponents/layout/AppLayout.jsx'
const App = () => {
  return (
    <>
    {/* <SearchDialog/> */}
    {/* <Header/> */}
    <MainHeader />

    <AppLayout/>

    </>
  )
}

export default App