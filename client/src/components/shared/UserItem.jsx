import {
  Avatar, 
  IconButton, 
  ListItem, 
  Stack, 
  Typography } from '@mui/material';

import React from 'react'

import {memo} from "react";

import {Add as AddIcon, Remove as RemoveIcon} from "@mui/icons-material";

const UserItem = (
  {
    user,
    handler,
    handlerIsLoading,
    // isAdded=false
  }

  ) => {
  // const {name,_id,avatar}=user;
  const {name,_id,avatar,isAdded}=user;

  return (
    // <div>UserItem</div>
    <ListItem>
        <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}

        >
            <Avatar 
            src={avatar}
            
            />

            <Typography
            variant={"body1"}
            sx={{
              flexGrow:1,
              // display:"-webkit-box"=
              //    helps to enable -webkit-line-clamp property
              display:"-webkit-box",

              // WebkitLineClamp=1
              //    truncate content of elem to specific no of lines
              WebkitLineClamp:1,

              // WebkitBoxOrient:"vertical"=
              //    specify orientation of flexbile box layout,
              //    in this set to vertical to stack line of text vertically
              WebKitBoxOrient:"vertical",
              overflow:"hidden",

              // textOverflow:"ellipsis"=
              //    asm...
              textOverflow:"ellipsis",
              width:"100%",
              // display:"none"
            }}
            
            >{name}</Typography>

            <IconButton
            onClick={()=>handler(_id)}
            disabled={handlerIsLoading}
            size={"small"}
            sx={{
              bgcolor:isAdded?"error.main":"primary.main",
              color:"white",
              "&:hover":{
                bgcolor:isAdded?"error.dark":"primary.dark",
              }
            }}
            >
              {/* <AddIcon/> */}

              {
                isAdded?<RemoveIcon/>:<AddIcon/>
              }

            </IconButton>

        </Stack>
    </ListItem>
  )
}

export default memo(UserItem);