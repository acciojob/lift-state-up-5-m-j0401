
import React, { useState } from "react";
import './../styles/App.css';
import Form from "./Form"


const App = () => {
  let [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
        <h1>Parent Component</h1>
      {  !isLoggedIn   &&  <Form setLog={setIsLoggedIn}/>   }
      {
        isLoggedIn && <p>You are logged in!</p>
      }
    </div>
  )
}

export default App
