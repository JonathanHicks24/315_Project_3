import "./loginCstyle.css"
import React, { useState, useRef } from "react"

  const data = [
    ["david", "123"],
     ["jon", "321"]
  ]

  /**
 * Gets Current window's URL
 */
  function getCurrentURL () {
    return window.location.href
  }

const url = getCurrentURL()
  var backend_url = "";
  // console.log(url);
  if (url.substring(0,21) == 'http://localhost:3000') {
    backend_url = 'http://localhost:3001/';
  }
  else {
    backend_url = 'https://sokudoblitzbackend.onrender.com/';
  }

  var obj;

  /**
 * Displays Login Page
 */
  const Login = () => { 
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    var id, pswrd;
    const [reports_data, setReports] = useState({})

    /**
 * Handles user input Name/ID
 */
    const handleNameChange = event => {
      setName(event.target.value);
      id = event.target.value;
    };

    /**
 * Gets Current window's Password
 */
    const handlePwdChange = event => {
      setPassword(event.target.value);
      pswrd = event.target.value;
    };

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    /**
 * Checks input credentials when Login button clicked
 */
    function handleClick() {

    var msg = inputRef1.current.value;
    var pwd = inputRef2.current.value;

    fetch(backend_url + 'get_employees')
      .then(response => {
          return response.text(); 
          })
      .then(data => {
          setReports(data);
          });
    obj = JSON.parse(reports_data);

    data = obj.map((val, key) => {
      // console.log("Val Name: " + val.name + "\tMSG: " + msg + "\tEVAl: " + ((test + "                                            " === val.name)))
      if ((val.name === (msg+"                                            ")) && (((String(val.employeeid)) + (String(val.managerid))) === pwd) ){
        console.log("Successfully Logged In: " + msg + "\tPWD: " + pwd)
        window.location.pathname="/ServerGUI/Serverorder";
        return true;
      }else{
        console.log("Failed to Login")
        return false;
      }
    })
    }
  
    
    return (
        //   <div class="nav1">
        //     <img alt = "Cabo Grill logo" title = "logo" className = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
        //     <h1 class="center">WELCOME TO CABO GRILL</h1>
        //     Input SERVER ID:
        //     <br/>
        //     <input ref={inputRef1} type="text" id="name" name="name" onChange={handleNameChange} value={name} /> 
        //     <input ref={inputRef2} type="text" id="password" name="password" onChange={handlePwdChange} value={password} />
        //     <button class="list" onClick={handleClick}>Login</button>
        //     <br/><br/>
        //     <button class="list" onClick={() => window.location.pathname = "/"}>Return</button>
        // </div>
        <div class="nav1">
          <img alt = "Cabo Grill logo" title = "logo" className = "logologin" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
          <br/>
          <div class="form">
              <input ref={inputRef1} type="text" placeholder = "Server ID" id="name" name="name" onChange={handleNameChange} value={name} /> 
              <input ref={inputRef2} type="text" placeholder = "Password" id="password" name="password" onChange={handlePwdChange} value={password} />
              <button onClick={handleClick}>Login</button>
              <br/>
              <button onClick={() => window.location.pathname = "/"}>Return</button>
        </div>
      </div>
    );
  };
  export default Login;
