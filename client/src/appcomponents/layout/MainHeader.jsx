// import React from 'react'

// const MainHeader = () => {
//   return (
//     <div>MainHeader</div>
//   )
// }

// export default MainHeader


import React, { Suspense, lazy } from 'react'
import {AppBar, Box, Icon, IconButton, Toolbar,Tooltip,Typography} from "@mui/material";
// import {orange} from '../constants/color';
// import "./constants/color.js";
// import {orange,red} from "@mui/material/colors";
import {useState} from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// import {orange} from "../../constants/color.js";
import {Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Menu as MenuIcon,Notifications as NotificationsIcon,Search as SearchIcon} from "@mui/icons-material"

import {  useNavigate } from 'react-router-dom';
// import SearchDialog from '../specific/SearchDialog';





// box=
//    similar to div, but provide spacing,alignment,styling option
// AppBar=
//    fixed position bar used as header
// Toolbar=
//    container for AppBar, or standalone component,
// Tooltip=
//    provide info when hover over an elem inside it





const MainHeader = () => {
  
 
  const navigate= useNavigate();


  const navigateToChat=()=>{
    // console.log("chat");
    navigate("/chat/groups");
    // setIsSearch((prev)=>!(prev));
    }
    const handleMobile=()=>{
        console.log("mobile");
        // setIsMobile((prev)=>!(prev));
      }

    

    return <>

        <Box
        sx={{flexGrow:1,
            bgcolor:""}}
        height={"4rem"}

        >
          <AppBar
          position="static"
          sx={{
            bgcolor:"#ea7070",
            
          }}
          >
            <Toolbar
            sx={{
              
            }}
            >
              <Typography
              variant="h5"
              sx={{
                display:{xs:"none",sm:"block"},
                
              }}
              >
                LinkedIn
              </Typography>

              <Box
              sx={{
                display:{xs:"block",
                sm:"none",
                bgcolor:"gold",
              }
              }}
              > 
              
              
                <IconButton color="inherit" onClick={handleMobile}>

                  <MenuIcon/>

                </IconButton>
              </Box>
             
              <Box
              sx={{
                bgcolor:"red",
                flexGrow:1,
                
              }}
              />

              <Box>

                  <IconBtn title={"chat"} icon={<GroupIcon/>} onClick={navigateToChat}/>
              </Box>

            </Toolbar>
          </AppBar>

          {/* asmitbox */}
        </Box>

    </>
}


// iconbtn neeche kuki tabhi onClick func ki value pta hogi
const IconBtn=({title,icon,onClick})=>{
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick} >
        {icon}
      </IconButton>
    </Tooltip>
  )
}


export default MainHeader