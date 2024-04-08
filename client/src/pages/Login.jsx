// rafce
import React from 'react'
// import { Typography } from '@mui/material/styles/createTypography';

import {useState} from "react"
import {Container,Paper,Typography,Stack,Avatar,IconButton} from "@mui/material"
// contaier provide layout container, 
// and paper creates a paper like surface with elevation and shadows
// 


// import * krke sb nhi aate as MUI LIKH lo
import * as MUI from "@mui/material"

// import {CameraAlt as CameraAltIcon } from "@mui/icons-material"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'

const Login = () => {
  const [isLogin, setIsLogin] =useState(true);

  // const toggleLogin=()=>setIsLogin(false);
  const toggleLogin=()=>setIsLogin((prev)=>!prev);

  return (
    // react component ko style style tag se, vahi 
    // material ui ke components ki style sx se
    <Container component={"main"} maxWidth="xs"
    // component main provide sementic meaning
    // it indicate that <container> component should render as <main> element in html
    sx={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"red",
    }}>
      <Paper elevation={3} sx={{padding:4,display:"flex",flexDirection:"column",alignItems:"center"}}>
      {/* elevation={3} sets elevation level of paper, giving a shadow effect ,3 represent elevation level */}
          {
            // isLogin?<span>Login</span>:<span>Register</span>
            isLogin?(

              // <></> shorthand for react fragment,
              // fragment is a way to group multiple child elem without adding extra DOM element 
              <>

                {/* typography used to display text with predefined styles,ensure consistent typography across app */}
                <Typography variant="h5" >Login</Typography>
                <form
                  style={{
                    padding:4,
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    // backgroundColor:"blue",
                  }}
                  >
                  <MUI.TextField  
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  // variant="filled"
                  />

                  <MUI.TextField  
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  type="password"
                  />


                  <MUI.Button
                    sx={{marginTop:"1rem"}}
                    variant="contained"//contained se blue color ki button
                    color="primary"
                    type="submit"
                    fullWidth
                  >Login</MUI.Button>

                  <Typography textAlign={"center"} margin={"1rem"}>OR</Typography>
                  
                  <MUI.Button
                    // sx={{marginTop:"1rem"}}
                    variant="text"//contained se blue color ki button
                    color="primary"
                    type="submit"
                    fullWidth
                    onClick={toggleLogin}

                  >Sign Up Instead</MUI.Button>
                </form>
              </>
            )
            :
            (
              <>

              {/* typography used to display text with predefined styles,ensure consistent typography across app */}
              <Typography variant="h5" >Sign Up</Typography>
              <form
                style={{
                  padding:4,
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                }}
                >


                {/*stack component of material ui used to stack child component vertically by defalt  */}
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                  sx={{
                    width:"10rem",
                    height:"10rem",
                    objectFit:"contain",
                  }}
                  >
                    
                  </Avatar>

                  <IconButton
                    sx={{
                      position:"absolute",
                      bottom:"0",
                      right:"0",
                      color:"white",
                      bgcolor:"rgba(0,0,0,0.5)",
                      ":hover":{
                        bgcolor:"rgba(0,0,0,0.7)",
                      }
                    }}
                    component="label"
                    >
                    <>
                      <CameraAltIcon/>
                      <VisuallyHiddenInput type="file"/>
                    </>
                    

                  </IconButton>
                </Stack>

                  
                <MUI.TextField  
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                // variant="filled"
                />

                <MUI.TextField  
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                // variant="filled"
                />

                <MUI.TextField  
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  // variant="filled"
                />

                <MUI.TextField  
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                />

                
               

                <MUI.Button
                  sx={{marginTop:"1rem"}}
                  variant="contained"//contained se blue color ki button
                  color="primary"
                  type="submit"
                  fullWidth
                >Sign Up</MUI.Button>

                <Typography textAlign={"center"} margin={"1rem"}>OR</Typography>
                
                <MUI.Button
                  // sx={{marginTop:"1rem"}}
                  variant="text"//contained se blue color ki button
                  color="primary"
                  type="submit"
                  fullWidth
                  onClick={toggleLogin}

                >Log In Instead </MUI.Button>
              </form>
              
              </>
            )
          }
      </Paper>
    </Container>
  )
};

export default Login