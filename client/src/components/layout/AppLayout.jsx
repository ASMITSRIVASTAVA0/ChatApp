import React from 'react'
import Header from "./Header.jsx";
import Title from '../shared/Title.jsx';
import {Grid} from "@mui/material";
// const AppLayout = () => {
//   return (
//     <div>AppLayout</div>
//   )
// }
const AppLayout=()=>(WrappedComponent)=>{
    return (props)=>{
        return (
            // <div>
            <>
                <Title title={"asmit chat"}/>
                {/* <div>Header</div> */}
                <Header />

                <Grid 
                container 
                // height={"100vh"} 
                // style={{height:"100vh"}}
                // height={"calc(100vh-1rem)"}
                // style={{height:"calc(100vh-1rem)"}}
                style={{height:"calc(100vh - 1rem)"}}
                // bgcolor="primary.main"
                >
                    <Grid
                    item
                    sm={4}//small me 4 
                    md={3}
                    sx={{display:{xs:"none",sm:"block"}}}
                    height={"100%"}
                    // bgcolor="primary.main"
                    >
                        First
                    </Grid>

                    <Grid
                    item
                    xs={12}//main screen to puri grid
                    sm={8}
                    lg={6}
                    height={"100%"}
                    bgcolor="primary.main"
                    >
                        <WrappedComponent {...props}/>
                    </Grid>

                    <Grid 
                    item
                    // xs={4}
                    md={4}
                    lg={3}
                    sx={{
                        display:{xs:"none",md:"block"},
                        padding:"2rem",
                        bgcolor:"rgba(0,0,0,0.85)",
                    }}
                    height={"100%"}
                    // bgcolor="primary.main"
                    >
                        Third
                    </Grid>
                </Grid>

            
                {/* {props} */}
                <WrappedComponent {...props}/>
                <div>Footer</div>
            
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