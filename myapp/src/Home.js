import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import Hoc from './Hoc'

const Home = (props) => {
  const name='John'
  console.log(props)
  console.log(props.value)
  return (
    <>
    <center>
        <h1>Welcome to home page</h1>
        <Link to = {`/dashboard/${name}`} className='Link'>Dashboard</Link>{'  '}
        <Link to= {`/about?name=${name}&age=${25}`} className='Link'>About</Link>
    </center>
    
    </>
  )
}

export default Hoc(Home)
