import React,{createContext} from 'react'
import K1 from './K1'

export const person =  createContext()
const Createcontext = () => {
  return (
    <person.Provider value={{name:'madhan',pin:123456}}>
    <>
        <h1>This is createcontext component</h1>
        <K1/>
    </>
    </person.Provider>

  )
}

export default Createcontext
