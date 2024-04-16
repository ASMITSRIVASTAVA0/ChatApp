import {isValidUsername} from "6pp";


export const usernameValidator=(username)=>{

    if(isValidUsername(username)==false)
    // ek obj return jiske isValid,errorMessage j rha
    return {isValid:false,errorMessage:"Username is Invalid by asmit",};

}