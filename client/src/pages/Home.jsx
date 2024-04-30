import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box
      sx={{
        bgcolor:"rgba(0,0,0,0.1)",
        height:"100vh",
      }}
      >
        <Typography 
        variant={"h5"}
        sx={{
          padding:"2rem",
          textAlign:"center",
        }}
        
        >Select a Friend to Chat</Typography>
      </Box>
      
    </>
  )
}

// export default Home

// AppLayout high order component ko call joki home component 
// ko as parameter le rha
export default AppLayout()(Home);
// export default AppLayout()(Home ,text={"asmitprops"});