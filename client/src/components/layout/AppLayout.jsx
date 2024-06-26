import React from 'react'
import Header from "./Header.jsx";
import Title from '../shared/Title.jsx';
import {Backdrop, Dialog, DialogTitle, Grid, Skeleton} from "@mui/material";
import ChatList from '../specific/ChatList.jsx';
import { sampleChats } from '../../constants/sampleData.js';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile.jsx';
// const AppLayout = () => {
//   return (
//     <div>AppLayout</div>
//   )
// }


// higher order component, jisme wrappedcomponent as para aya
const AppLayout=()=>(WrappedComponent)=>{

    // const params=useParams();
    // const chatId=params.chatId;


    // props are way to pass data from par component to child(parameter)
    return (props)=>{
        console.log(props);//{}

        const params=useParams();
        const chatId=params.chatId;
        // console.log("params="+params.chatId);
        const handleDeleteChat=(myevent,_id,groupChat)=>{
            myevent.preventDefault();
            console.log("delete chat",_id,groupChat);
        }

        return (
            // <div>
            <>
                {/* <Dialog open>
                    <DialogTitle>title</DialogTitle>
                    asmit
                </Dialog> */}
                {/* <Backdrop open/> */}
                {/* <Skeleton variant={"circular"}>asmit</Skeleton> */}
                {/* user defined Title */}
                <Title title={"asmit header chat"}/>
                {/* <div>Header</div> */}

                {/* user defined header */}
                <Header />
                {/* <br></br> */}

                
                <Grid 
                container 
                // height={"100vh"} 
                // style={{height:"100vh"}}
                // height={"calc(100vh-1rem)"}
                // style={{height:"calc(100vh-1rem)"}}

                // ht=100% of vriwport height-1rem
                style={{height:"calc(100vh - 1rem)"}}
                // bgcolor="primary.main"
                >
                    <Grid
                    item
                    sm={4}//small me 4 
                    md={3}
                    sx={{display:{xs:"none",sm:"block"}}}
                    height={"100%"}
                    // bgcolor="green"
                    >

                        {/* <ChatList chats={[1,2,3,4,5]} /> */}

                        
                        {/* chats me arr of obj bheja */}


                        {/* <ChatList chats={sampleChats}/> */}
                        
                        
                        <ChatList 
                        /* sampleChat=[{...,...,...}] */
                        chats={sampleChats} 

                        // /chat/home pr chatId=notdefined, pr chats dikhege gi as sample data
                        chatId={chatId}
                        
                        // arr of obj
                        newMessagesAlert={[
                            {
                                // chatId:"1",
                                chatId,
                                count:4,
                            },
                        ]}
                        onlineUsers={["1",]}

                        handleDeleteChat={handleDeleteChat}
                        />


                        {/* <ChatList chats={ [sampleChats,sampleChats,sampleChats] } /> */}
                    </Grid>

                    <Grid
                    item
                    xs={12}//main screen to puri grid
                    sm={8}
                    md={5}
                    lg={6}
                    height={"100%"}
                    // bgcolor="primary.main"
                    >
                        {/* <WrappedComponent {...props}/> */}
                        <WrappedComponent/>
                    </Grid>

                    <Grid 
                    item
                    // xs={4}
                    md={4}
                    lg={3}
                    sx={{
                        display:{xs:"none",md:"block"},
                        padding:"2rem",
                        // bgcolor:"rgba(0,0,0,0.85)",
                    }}
                    height={"100%"}
                    bgcolor="rgba(0,0,0,0.85)"
                    >
                        <Profile/>
                    </Grid>
                </Grid>

            
                {/* {props} */}


                {/* <WrappedComponent {...props}/> */}
                {/* <WrappedComponent/>
                
                <div>Footer</div> */}
            
            </>
            // </div>
        )
    }
    // const WrappedComponentWithLayout=(props)=>{
    //     return (
    //         <div>

    //             <div>Header</div>
    //             <WrappedComponent {...props}/>
    //             <div>Footer</div>

    //         </div>
            
    //     )
    // }

    // return WrappedComponentWithLayout;
}

export default AppLayout