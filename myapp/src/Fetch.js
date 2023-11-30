import React,{useEffect,useState} from 'react'

const Fetch = () => {
  const[data,setData] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json =>setData(json))
      .catch((err)=> console.log(err))
    
  },[])
  return (
    <>
     {data.map((item)=><div key={item.id} ><ul><li>{item.title}</li></ul></div>)}
    </>
    
  )
}

export default Fetch
