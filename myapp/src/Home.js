import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => {
  return (
    <>
    <center>
        <h1>Welcome to home page</h1>
        <Link to='/dashboard' className='Link'>Dashboard</Link>{'  '}
        <Link to='/about' className='Link'>About</Link>
    </center>
    
    </>
  )
}

export default Home
