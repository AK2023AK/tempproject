import react,{useContext} from 'react'
import {person} from './Createcontext'

const K2 = ()=>{
    const find = useContext(person)
    return(
        <>
        <h3>This is {find.name}</h3>
        <h4>Pin code - {find.pin}</h4>
        </>
    )
}


export default K2