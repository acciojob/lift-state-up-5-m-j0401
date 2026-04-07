
import React from "react"



const Form=({setLog})=>{
    function handleSubmit(e){
        e.preventDefault();
        setLog(true);
    }
  
  
  return <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" id="username"/> 
          <br/>
          <label>Password:</label>
            <input type="password" id="password"/> 
            <br/>
            <button type="submit">Log In</button>
            </form>
            
}

export default Form;