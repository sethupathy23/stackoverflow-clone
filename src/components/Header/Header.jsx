import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/Inbox';
import DehazeIcon from '@mui/icons-material/Dehaze';
import './Header.css'


function Hello() {
  return (
    <div>
   
       <header>
     
       <div className='header-container'>
       <div className='header-left'>
      
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg" alt="logo" />
     
        <h3>products</h3>
       </div>
       <div className='header-middle'>
        <div className='header-search-container'>
          <SearchIcon style={{color:'#ccc'}}  />
          <input type="text" placeholder='search...'/>
        </div>
       </div>
       <div className='header-right'>
       <div className='header-right-container'>
       <Avatar>H</Avatar>
       <InboxIcon/>
       <DehazeIcon />
       </div>

       </div>


       </div>
        </header>
    </div>
  )
}

export default Hello