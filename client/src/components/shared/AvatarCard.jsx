import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'

const AvatarCard = ({avatar=[],max=4}) => {
  return (
    // <div>AvatarCard</div>

    <Stack direction={"row"} spacing={0.5}>
        <AvatarGroup max={max}>
            <Box width={"5rem"} height={"3rem"}>

                {
                    avatar.map((imgurl,index)=>(
                        <Avatar
                        key={Math.random()*10000}
                        src={imgurl}
                        alt={`Avatar${index}`}
                        sx={{
                            width:"3rem",
                            height:"3rem",
                            position:"absolute",
                            left:{
                                xs:`${0.5+index}rem`,
                                sm:`${index}rem`,
                            }
                        }}
                        
                        />
                       )
                    )
                }

            </Box>
        </AvatarGroup>
    </Stack>

  )
}

export default AvatarCard