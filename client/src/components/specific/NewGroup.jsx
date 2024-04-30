import { Dialog, DialogTitle, Stack ,TextField, Typography,Button, InputAdornment} from '@mui/material'
import React,{useState} from 'react'
import { sampleNotifications, sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useInputValidation } from '6pp'

const NewGroup = () => {

  // const [members,setMembers]=useState([]);
  const [members,setMembers]=useState(sampleUsers);
  const [selectedMembers,setSelectedMembers]=useState([]);


  const groupName=useInputValidation("")

  const selectMemberHandler=(_id)=>{
    console.log("group");

    setMembers((prev)=>
        prev.map((user)=>
          user._id===_id?{...user,isAdded: !user.isAdded}
          :
          user
        ) 
    )


    // setSelectedMembers((prev)=>[...prev,_id]);
    setSelectedMembers((prev)=>
      prev.includes(_id)
      ?prev.filter((currId)=>currId!==_id)
      :[...prev,_id]
    );

    console.log(selectedMembers);
  }

  const submitHanlde=()=>{
    console.log("submit");
  }

  const closeHandler=()=>{
    console.log("close");
  }
  return (
    <Dialog 
    open 
    onClose={closeHandler}
    >
      <Stack
      sx={{
        padding:"1.5rem",
        width:"25rem",
        spacing:"2rem",
      }}
      spacing={"2rem"}
      > 
        <DialogTitle
        textAlign={"center"}
        variant={"h4"}
        >New Group</DialogTitle>

        <TextField
       
        sx={{
          background:"#E8F0FE",
        }}
        value={groupName.value}
        onChange={groupName.changeHandler}
        // placeholder='Group Name'
        label="Group Name"
        InputProps={{
          
          startAdornment:(
            <InputAdornment position='start'>
            <GroupAddIcon/>
            </InputAdornment>
          )
        }}
        />

        <Typography
        variant={"body1"}
        >All Members</Typography>

        <Stack
        
        >
            {
              // sampleUsers
              members.map((user)=>(
              
                 
                  <UserItem
                  user={user}
                  key={user._id}
                  handler={selectMemberHandler}
                  isAdded={selectedMembers.includes(user._id)}
                  />
                
                
              ))
            }
        </Stack>

        <Stack 
        direction={"row"}
        justifyContent={"space-between"}
        >
            <Button size="large" variant="outlined" color="error">Cancel</Button>
            <Button onClick={submitHanlde} size="large" variant="contained">Create</Button>
            
        </Stack>
        

      </Stack>
    </Dialog>
  )
}

export default NewGroup