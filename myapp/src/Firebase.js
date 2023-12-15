import React,{useState} from 'react'

const Firebase = () => {
    const[data,setData] = useState({
        name:'',
        age:''
    })
    const changeHandler = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    
    const submitHandler = (e)=>{
        e.preventDefault()
        fetch('https://react-testing-8877c-default-rtdb.firebaseio.com/data.json',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "content-type" : "application/json ; charset=UTF-8"
            }
        }).then( res=> alert("Data Posted")).catch(err=> console.log(err))
    }
  return (
    <>
    <center>
        <form onSubmit={submitHandler}>
            <label for="username" >Name :</label> <br />
            <input type="text" id="username" name="name" onChange={changeHandler}/> <br/>
            <label for="userage">Age :</label> <br />
            <input type="text" id="userage" name ="age" onChange={changeHandler}/> <br/> <br />
            <input type='submit' value="PostData" /><br />
        </form>
    </center>
    
    </>
  )
}

export default Firebase
