import React from 'react'

import {Navigate,Outlet} from "react-router-dom"


// children ProtectRoute ke andar k koi child h
// ye children k access apne app milta
const ProtectRoute = ({childrenAsmit,user,redirect="/login"}) => {

    if(!user){
        // navigate=
        //      component in react-router-dom used for declarative navigation 
        return <Navigate to={redirect}/>
    }
    // return (<div>asmit</div>)
    // return children;

    // return children?children:<div>asmit</div>
    return childrenAsmit?childrenAsmit:<Outlet/>
    // Outlet===
    //      outlet is placeholder for child route within parent route when using nested routing



}

export default ProtectRoute;