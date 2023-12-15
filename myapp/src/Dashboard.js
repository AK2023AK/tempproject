import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import {useParams} from 'react-router-dom'


const Dashboard = () => {
  let params = useParams()
  return (
    <>
    <center>
       <h1>Your in dashboard page</h1>
       <p>Name : {params.user}</p>
       <Link to='/' className='Link'>Back to Home</Link>
    </center>
    </>
  )
}

export default Dashboard
