import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Mainn from './Mainn'
import Addquestions from './Addquestions'



function Viewquestion() {
  return (
    <div className='stack-index'>
    <div className='stack-index-content'>
        <Sidebar />
        <Mainn />
      </div>
   <div> <Addquestions /></div>
    </div>
  )
}

export default Viewquestion