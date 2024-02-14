import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Simple validation (replace this with your actual authentication logic)
    if (username === 'tanmayee' && password === 'tan') {
      setErrorMessage('Login successful!');
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </div>
  );
};

export default Login;

import React from 'react'
import logo from './images/logo.png'

const popupwindowstyle={width:'300px',height:'450px', background:'white'};
const logostyle={width:'75px',height:'75px', position:'absolute', left:'115px', top: '10px'};
const logodivstyle={height: '100px'}
const space={height:'10px'}
function Login(){
    /*Login ia a component. so capital L*/
    function validate()
    {
        var T1=document.getElementById('T1');
        var T2=document.getElementById("T2");
        if(T1.value==='admin' && T2.value==='admin')
        {
            // alert("Welcome Admin");
            window.location.replace("/home");
            
        }
        else{
            alert("Invalid Credentials!");
        }

    }
    function registration()
    {
        alert("From registration....")
    }
    return(
        <div className='full-height'>
            <div id='header' className='loginheader'>KL University</div>
            <div id='content' className='logincontent'>
                <div id='popup' className='popup'>
                    <div id='popupwindow' className='popupwindow' style={popupwindowstyle} >
                        <div className='loginstyle1'>Login</div>
                        <div className='loginstyle2'>
                            <div style={logodivstyle}>
                                <img src={logo} alt='' style={logostyle} />
                            </div>
                            <div>Username*</div>
                            <div><input type='text' id='T1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='T2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={validate}>Sign In</button></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div >New User?<label className='linklabel' onClick={registration}>Register Here</label></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer' className='loginfooter'>Copyright @ KL University. All rights reserved.</div>
        </div>
    );
}

export default Login;