import React from 'react'
import {AppBar, Box} from "@mui/material";
import {orange} from '../constants/color';
const Header = () => {
  // return (
  //   <div>Header</div>
  // )
    return <>
        <Box
        sx={{flexGrow:1}}
        height={"4rem"}
        >
          <AppBar
          position="static"
          sx={{
            // bgcolor:"#ea7070"
            // bgcolor:"red"
            bgcolor:orange
          }}
          >

          </AppBar>

        </Box>
    </>
}

export default Header