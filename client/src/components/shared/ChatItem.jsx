import React, { memo } from 'react'
import {Link} from "../styles/LinkComponent";
import { Box, Typography,Stack } from '@mui/material';
import AvatarCard from './AvatarCard';
// import { Link } from 'react-router-dom'

// memo====
//      higher order component
//      prevent unnecessary re rendering when probs not changed
//      agar par ke probs change to ye re-render,jb iske probs change tbhi re-render
//      performance inc as avoid unnecessary re-rendering

const ChatItem = (
    // destructuring probs
    {
        // avatar=["img1","img2","img3"];
        avatar=[],
        name,
        _id="asmitid",
        groupChat=false,
        // sameSender=false,
        sameSender,
        isOnline,
        newMessageAlert,
        index=0,
        handleDeleteChat,
    }


) => {
  return (
    // <div>ChatItem</div>

    // this link is user defined
    <Link 
        to={`/chat/chats/${_id}`}
        sx={{
            padding:0,
        }}
        // onContextMenu====
        //     event handler,handle right click event,i.e. open context menu
        onContextMenu={
            (event)=>handleDeleteChat(event,_id,groupChat)
            // console.log("rightclick")
        }

    >
        <div
        style={{
            display:"flex",
            // gap:"10rem",
            gap:"1rem",
            alignItems:"center",
            // backgroundColor:"red",
            // height:"10rem",
            // padding:"0rem",
            padding:"1rem",
            backgroundColor:sameSender?"black":"unset",
            color:sameSender?"white":"unset",
            position:"relative",
        }}
        >

            {/* stack here similar to container */}

            <AvatarCard avatar={avatar}/>
            <Stack
            sx={{
                // backgroundColor:"crimson",
            }}
            >
                <Typography>name={name}</Typography>
                {
                    newMessageAlert&&(
                        <Typography>{newMessageAlert.count} New Message</Typography>
                    )
                }
            </Stack>



            {
                isOnline&&(

                    <Box
                        sx={{
                            width:"10px",
                            height:"10px",
                            borderRadius:"50%",
                            backgroundColor:"green",
                            position:"absolute",
                            top:"50%",
                            right:"1rem",
                            transform:"translateY(-50%)"
                        }}    
                    />

                )
            }
        </div>
    </Link>
  )
}

// export default ChatItem

// memo krne se jb iske probs me change tbhi ye re-render
// agar par me change(chatList) me to koi change nhi

export default memo(ChatItem)