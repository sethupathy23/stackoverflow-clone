import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import StarsIcon from '@mui/icons-material/Stars';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from "react-router-dom";
import './App.css'

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebar-container'>
    <div className='sidebar-options'>
    <div className='sidebar-option'>
    <Link to='/home' href="">Home</Link>
    </div>
    <div className='sidebar-option'>
    <Link to='/public' href="">PUBLIC</Link>
    <div className='link'>
    <div className='link-tag'>
    <PublicIcon />
    <Link to='/question' href="">Question</Link>
    </div>
      <div className='tags'>
        <p>Tags</p>
        <p>Users</p>
      </div>
    </div>
    </div>
    <div className='sidebar-option'>
    <p>COLLECTIVES</p>
    <div className='link'>
    <div className='link-tag'>
    <StarsIcon />
    <Link to='/explore collectives'>Explore Collectives</Link>
       </div>
      </div>
     </div>
     <div className='sidebar-option'>
      <p>FIND A JOB</p>
     <div className='link'>
    <div className='link-tag'>
    
    <Link to='/question'>Question</Link>
    </div>
      
    </div>
     </div>
    <div className='sidebar-option'>
      <p>TEAMS</p>
      <div className='link-tag'>
      <WorkIcon />
    <Link to='/companies'>Companies</Link>
    </div>
    </div>
    </div>
   </div>
  </div>
  )
}

export default Sidebar
