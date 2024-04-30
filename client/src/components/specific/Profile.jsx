import { Stack ,Avatar, Typography} from '@mui/material'
import React from 'react'

import {
    Face as FaceIcon,
    AlternateEmail as AlternateEmailIcon,
    // UserName as UserNameIcon,
    Person as PersonIcon,
    CalendarMonth,
    // CalenderMonth as CalenderMonthIcon,
} from "@mui/icons-material"


import moment from "moment";

const Profile = () => {
  return (
    // <div>Profile</div>
    <Stack
    spacing={"2rem"}
    direction={"column"}
    alignItems={"center"}
    >
        <Avatar
        sx={{

            width:200,
            height:200,
            objectFit:"contain",
            marginBottom:"1rem",
            border:"5px solid white",
        }}
        >
            
        </Avatar>

        {/* ProfileCard user defined as below */}
        <ProfileCard heading={"bio"}text={"asmit"}/>
        <ProfileCard heading={"Username"} text={"asmit"} Icon={<AlternateEmailIcon/>}/>
        <ProfileCard heading={"Name"} text={"asmit"} Icon={<FaceIcon/>}/>

        {/* browser console me=let d=new Date();d.toISOString()=='2024-04-22T17:05:34.199Z' */}
        <ProfileCard heading={"Joined"} text={moment('2024-04-22T17:05:34.199Z').fromNow()} Icon={<CalendarMonth/>}/>
        
    </Stack>

    
  )
}

const ProfileCard=({text,heading,Icon})=>{
    // return <div>ProfileCard</div>
    return (
        <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        color={"white"}
        textAlign={"center"}
        >

            {
                Icon&&Icon
            }

            <Stack>

                {/* body1=size more,body2=size less */}
                <Typography variant={"body1"}>{text}</Typography>
                <Typography variant={"caption"} color={"gray"}>{heading}</Typography>
            </Stack>

        </Stack>
    )
}


export default Profile