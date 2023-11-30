import React from 'react'

const Hoc = (Component) => {
  return (
    class extends React.Component{
        state = {auth:true}
        render(){
            return(
                <>
                <center>                
                  {(this.state.auth)?<Component value={24}/> :<h1>Go to login Page</h1>}
                </center>
                </>
            )
        }

    }
    
  )
}

export default Hoc

