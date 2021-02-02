import React , { useState} from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import axios from './axios';

function Login() {

const [input, setInput]= useState("");

const [password1, setPassword]= useState("");



const sendMessage12= async (/*e*/) => {
  //  e.preventDefault();

    await axios.post('/',{
       
        name: input,
        password: password1, 
        
        
        });


        setInput('');
        setPassword('');
};



    return (
        <div className="login">
            <div className="login__body">
           

      <form className="login-box">
      <h1>Login page</h1>
       <input type="text" placeholder="Username" name="" value={input} onChange={(e) => setInput(e.target.value)} />
       <input type="password" placeholder="Password" name="" value={password1} onChange={(e) => setPassword(e.target.value)}  />
       <Link to="/chatpage">
<button className="btn" onClick={sendMessage12}>login</button>
</Link>

<p>do not have account?</p>
<button className="btn">register</button>

      </form>




            </div>
           



        </div>
    )
}

export default Login;
