import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => {
  const name = 'john'
  return (
    <>
    <center>
        <h1>Welcome to home page</h1>
        <Link to= {`/dashboard/${name}`} className='Link'>Dashboard</Link>{'  '}
        <Link to= {`/about?name=${'Krishna'}&age=${25}`} className='Link'>About</Link>
    </center>
    
    </>
  )
}

export default Home
