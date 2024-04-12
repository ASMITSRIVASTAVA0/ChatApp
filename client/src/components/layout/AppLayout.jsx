import React from 'react'
import Header from "./Header.jsx";
// const AppLayout = () => {
//   return (
//     <div>AppLayout</div>
//   )
// }
const AppLayout=()=>(WrappedComponent)=>{
    return (props)=>{
        return (
            <div>
                {/* <div>Header</div> */}
                <Header />
                <WrappedComponent {...props}/>
                <div>Footer</div>
            </div>
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