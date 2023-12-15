import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from 'react'
const Create = () => {
    const[data,setData] = useState({
        firstname:'',
        lastname:'',
        email:''
    })
    const{firstname,lastname,email} = {...data}
    const changeHandler =(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(data)
    }

  return (
    <>
    <center>
        <form onSubmit={submitHandler}>
            <br /><br /><br />
            <input type='text' name='firstname' value={firstname} placeholder='Firstname' onChange={changeHandler} /> <br /><br /><br />
            <input type='text' name='lastname' value={lastname} placeholder='Lastname' onChange={changeHandler}/>  <br /><br /><br />
            <input type='text' name='email' value={email} placeholder='Email' onChange={changeHandler} />  <br /><br /><br />
            <input type='submit' value='Save'/>
        </form>
   </center>
    
    </>
  )
}

export default Create
