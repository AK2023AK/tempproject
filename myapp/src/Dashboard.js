import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Dashboard = () => {
  return (
    <>
    <center>
       <h1>Your in dashboard page</h1>
       <Link to='/' className='Link'>Back to Home</Link>
    </center>
    </>
  )
}

export default Dashboard
