import {isValidUsername} from "6pp";


export const usernameValidator=(username)=>{

    if(isValidUsername(username)==false)
    return {isValid:false,errorMessage:"Username is Invalid by asmit",};

}