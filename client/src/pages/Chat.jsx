import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material';
import {InputBox}  from '../components/styles/InputBox';
import FileMenu from '../components/dialogs/FileMenu';

const Chat = () => {
  const containerRef=useRef(null);

  const FileMenuRef=useRef(null);

  return (
    <>
      <Stack
        direction={"row"}
        ref={containerRef}
        sx={{
          padding:"1rem",
          spacing:"1rem",
          bgcolor:"rgba(0,0,0,0.1)",
          // bgcolor:"rgba(247,247,247,1)",
          // height:"80%",
          height:"90%",
          overflowX:"hidden",
          overflowY:"auto",
          boxSizing:"border-box",
          
        }}
      >
        hellow
      </Stack>

      <form
      style={{
        height:"10%",
        bgcolor:"blue",
      }}
      >
        <Stack
        direction={"row"}
        height={"100%"}
        padding={"1rem"}
        alignItems={"center"}
        position={"relative"}
        sx={{
          // bgcolor:"red",
          // display:"flex",
          // flexDirection:"row",
        }}
        >
          <IconButton
          sx={{
            // position:"absolute",
            // left:"1.5rem",
            rotate:"30deg",
          }}
          ref={FileMenuRef}
          >
            <AttachFileIcon/>
          </IconButton>


          <InputBox
          placeholder="Type Message Here..."
          sx={{
            // width:"100%"
            // bgcolor:"blue",
            width:"100%",
            height:"100%",
            outline:"none",
            padding:"1.5rem",
            borderRadius:"1.5rem",
            backgroundColor:"rgba(247,247,247,1)",
          }}
          />


          <IconButton
            type="submit"
            sx={{
              rotate:"-30deg",
              backgroundColor:"#ea7070",
              color:"white",
              marginLeft:"1rem",
              padding:"0.5rem",
              "&:hover":{
                bgcolor:"error.dark",
              }
            }}
          >
            <SendIcon/>
          </IconButton>


        </Stack>
      </form>

      {/* <FileMenu anchorE1={FileMenuRef.current}/> */}

    </>
  )
}

// export default Chat
export default AppLayout()(Chat);