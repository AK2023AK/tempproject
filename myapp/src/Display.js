import React,{useContext,useState} from 'react'
import {store} from './App'
const Display = () => {
    const [data,setdata] = useContext(store)
    const [name,setName] = useState('')
    function submitHandler(e){
      e.preventDefault()
      setdata([...data,{brandname:name}])
    }
  return (
    <>
      <center>
          <div className='card'>
              <div className='card-body'>
                  {data.map((item)=><h1 className='card-title'>{item.brandname}</h1>)}
              </div>
          </div>
          <form className='form' onSubmit={submitHandler}>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <input type="submit" value='Add' />
          </form>
      </center>
    </>
  )
}

export default Display
