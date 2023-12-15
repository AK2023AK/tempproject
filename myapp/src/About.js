import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import { useLocation } from 'react-router-dom'



const About = () => {
  let {search} = useLocation()
  let params = new URLSearchParams(search)
  return (
    <>
    <center>
      <h1>Your in About Page</h1>
      <p>Name:{params.get('name')}</p>
      <p>Name:{params.get('age')}</p>

      <Link to='/' className='Link'>Back to Home</Link>
    </center>
    
    </>
    
  )
}

export default About
