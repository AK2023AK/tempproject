import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'

const Edit = () => {
  return (
   <>
   <center>
    <input type='text' name='firstname' placeholder='Firstname'/> <br/>
    <input type='text' name='lastname' placeholder='Lastname'/>  <br/>
    <input type='text' name='email'placeholder='Email'/>  <br/>
    <input type='button' value='Save'/>
   </center>
   </>
    
  )
}

export default Edit
