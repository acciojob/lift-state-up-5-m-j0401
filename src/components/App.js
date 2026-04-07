
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
        isLoggedIn && <h2>You are logged in!</h2>
      }
    </div>
  )
}

export default App
