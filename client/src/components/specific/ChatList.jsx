import { Stack, Typography } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'

const ChatList = (
    // ChatList me aaye probs ko destructure kiya
    {
        w="100%",
        chats=[],
        chatId,
        onlineUsers=[],
        newMessagesAlert=[
            {
                chatId:"1",
                count:0,
            }
        ],
        handleDeleteChat,


    }


) => {
  return (
    <Stack 
    sx={{
        bgcolor:"red",
        // height:"5rem",
        // height:"100%",

        // chl n rha
        // alignContent:"row",
        // displayFlex:"row",

    }}
    width={w} 
    direction={"column"}
    >

        {/* js logic inside {} */}

        {
            // chat arr joki probs me aai
            chats?.map((data,index)=>{

                /*
                    data====
                        export const sampleChats=
                        
                            {
                                avatar:["https://www.w3schools.com/howto/img_avatar.png"],
                                name:"Asmit Srivastava",
                                _id:"1",
                                groupChat:"false",
                                members:["1","2"],
                            },
            
                        
                */
                const {avatar,_id,name,groupChat,members}=data;

                // newMessageAlerts obj defined in probs
                const newMessageAlert=newMessagesAlert.find(
                    // ({chatId})=>alert.chatId===_id
                    ({chatId})=>chatId===_id
                )

                const isOnline=members?.some((member)=>onlineUsers.includes(member));

                // return <div>{data}</div>


                // return to stack as arr.map ko return
                return (
                    <>
                        {/* <div>{data.name}</div> */}
                        <ChatItem 
                        newMessageAlert={newMessageAlert} 
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                        _id={_id}
                        key={_id}
                        index={index}
                        groupChat={groupChat}
                        // sameSender={true}
                        sameSender={chatId===_id}
                        handleDeleteChat={handleDeleteChat}
                        />
                        {/* <Typography>name={name} id={_id} avatar={avatar}</Typography> */}
                        {/* <br></br> */}
                        {/* <div>alert={newMessageAlert.chatId} id={_id}</div> */}
                    </>

                )
            }
            )
            
        }
    </Stack>
  )
}

export default ChatList