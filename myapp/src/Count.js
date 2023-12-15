import React from 'react'
import {useContext} from 'react'
import {store} from './App'
const Count = () => {
    const [data,setdata] = useContext(store)
  return (
    <>
    <center>
        <div className="card">
            <div className = 'card-body'>
              <h1 className="card-title">Count : {data.length}</h1>
            </div>
        </div>
    </center>
    </>
    
  )
}

export default Count
