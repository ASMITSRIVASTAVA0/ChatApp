// import React from 'react'

// const StyledComponents = () => {
//   return (
//     <div>StyledComponents</div>
//   )
// }

// export default StyledComponents



import {styled} from "@mui/material";
// allow to create custom styled components with material ui styling solution

import {Link as LinkComponent} from "react-router-dom";

export const VisuallyHiddenInput=styled("input")(
    {
        border:0,
        clip:"rect(0 0 0 0)",
        height:1,
        margin:-1,
        overflow:"hidden",
        padding:0,
        position:"absolute",
        whiteSpace:"nowrap",
        width:"1",
    }
);

// export const Link=styled(LinkComponent)(
//     {
//         textDecoration:"none",
//         color:"black",
//         padding:"1rem",
//         hover:{
//             backgroundColor:"#f0f0f0",
//         }
//     }
// );

export const InputBox="";