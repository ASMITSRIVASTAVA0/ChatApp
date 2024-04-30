import { Search as SearchIcon, TextFields } from '@mui/icons-material';
import { Dialog, DialogTitle, TextField ,Stack, InputAdornment, List, ListItem, ListItemText, Button} from '@mui/material';
import React, { useState } from 'react'

import { useInputValidation } from '6pp';
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sampleData';

import CloseIcon from '@mui/icons-material/Close';

// const users=[1,2,3];

const SearchDialog = ({handler}) => {

  const [users,setUsers]=useState(sampleUsers);
  
  const search=useInputValidation("");

  console.log(handler);

  let isLoadingSendFriendRequest=false;

  const addFriendHandler=(id)=>{
    console.log(id);
  }

  return (
    // <div
    // style={{
    //   backgroundColor:"red",
    //   // height:"5rem",
    // }}
    // >Search</div>


    // <Dialog open>abs</Dialog>

    <Dialog 
    open
    sx={{
      // backgroundColor:"rgba(255,0,0,0.1)",
      // opacity:0.1,
      // backdropFilter:
    }}
    >
      {/* dialog open se background thoda black, aur ek white page in front */}
      <Stack 
      padding={"2rem"} 
      direction={"column"} 
      width={"25rem"}
      >
        <CloseIcon variant='contained' onClick={handler}/>
        
        <DialogTitle
        textAlign={"center"}
        variant="h4"
        >Find People</DialogTitle>

        {/* <SearchIcon onclick={handler}/> */}
        <TextField 
        label="Search" 
        sx={{
          background:"#E8F0FE",
        }}
        value={search.value} 
        onChange={search.changeHandler}
        variant="outlined"
        size="small"

        /*
        inputprobs=
            pass additional properties to input elem
            rendered inside textfield,like maxLength:10,autoFocus:true

            startAdornment=
                add elem at start of input field
        */
        InputProps={{
          
          startAdornment:(

            // InputAdornment se thoda padding aai
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          )
        }}
        />
        

        <List>
          {
            users.map((user)=>(
              // <ListItem>
              //   <ListItemText/>
              // </ListItem>
              <UserItem
                user={user}
                key={user._id}
                handler={addFriendHandler}
                handleIsLoading={isLoadingSendFriendRequest}

              />

            ))
          }
        </List>
        
      </Stack>
    </Dialog>
  )
}

export default SearchDialog;