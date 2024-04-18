import React from 'react'
import AppLayout from '../components/layout/AppLayout'

const Home = () => {
  return (
    <div>Home</div>
  )
}

// export default Home

// AppLayout high order component ko call joki home component 
// ko as parameter le rha
export default AppLayout()(Home);
// export default AppLayout()(Home ,text={"asmitprops"});