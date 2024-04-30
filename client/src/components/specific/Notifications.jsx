import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import { sampleNotifications } from '../../constants/sampleData';


const Notifications = () => {


  const friendRequestHandler=(
    {
      _id,
      accept,
    }
  )=>{

  };


  return (
    // <div
    // style={{
    //   backgroundColor:"yellowgreen",
    // }}
    // >Notifications</div>

    <Dialog
    open
    >
      <Stack sx={{
        padding:"1.5rem",
        maxWidth:"25rem",
      }}>
        <DialogTitle
        // textAlign={"center"}
        variant='h4'
        sx={{
          textAlign:"center",

        }}
        >Notifications</DialogTitle>

        {
          sampleNotifications.length>0 ?(
            // <></>
            sampleNotifications.map((notification)=>(
              <NotificationItem 
              sender={notification.sender} 
              _id={notification._id} 
              handler={friendRequestHandler}
              key={notification._id}
              />
            ))

          ):(
            <Typography
            textAlign={"center"}

            
            >0 Notifications</Typography>
          )
        }


      </Stack>
    </Dialog>

  )
}

// const NotificationItem=(
const NotificationItem=memo(
(
  {
    sender,
    _id,
    handler,
  }
)=>{

  const {name,avatar}=sender;

  return (
    <ListItem>
          <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}

          >
              <Avatar src={avatar}/>

              <Typography
              variant={"body1"}
              sx={{
                flexGrow:1,
                display:"-webkit-box",
                WebkitLineClamp:1,
                WebKitBoxOrient:"vertical",
                overflow:"hidden",
                textOverflow:"ellipsis",
                width:"100%",
              }}
              
              >{name} sends Friend Request</Typography>

              <Stack
              direction={{
                xs:"column",
                sm:"row",
              }}
              >

                <Button onClick={()=>handler({_id,accept:true})}>Accept</Button>
                <Button onClick={()=>handler({_id,accept:false})} sx={{color:"red",}}>Reject</Button>

              </Stack>

          </Stack>
    </ListItem>

  )
}
);

export default Notifications