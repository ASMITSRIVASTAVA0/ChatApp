import React from 'react'

import {Grid, Skeleton,Stack} from "@mui/material";

// skeleton=
//    create loading placeholder,usually mimic layout of content that is being fetched

// stack=
//    layout components vertically/hoziontally with predefined spacing


// const Loaders = () => {
//   return (
//     <div>Loaders</div>
//   )
// }

// export default Loaders

export const LayoutLoader=()=>{
  return (
        
        <>

        <Grid 
        container 
        spacing={"1rem"}
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


              {/* 
              skeleton==
                      content being fetched or loaded async
                      used when data fetched from api
                      create loading placeholder
                      variant=rectangular (or) text (or) circular
              */} 
            
                <Skeleton variant="rectangular" height={"100vh"} bgcolor="black"/>
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
                {/* <Skeleton variant="rectangular" height={100} />
                <Skeleton variant="rectangular" height={100} />
                <Skeleton variant="rectangular" height={100} />
                <Skeleton variant="rectangular" height={100} />
                <Skeleton variant="rectangular" height={100} /> */}


              {/* stack container with spacing 1rem btwits children */}

               <Stack spacing={"1rem"}>
                  {

                    // Array.from create arr of specific len

                    Array.from({length:10}).map((_,index)=>(
                    <Skeleton key={index} variant={"rounded"} height={"5rem"}/>
                      )
                    )
                  }

               </Stack>

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
  
            >
                <Skeleton variant="rectangular" height={"100vh"} bgcolor="black"/>
            </Grid>
        </Grid>

    
    </>

  )
}