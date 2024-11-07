import React, { useState } from 'react';
import '../Resigster/register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate();
  const [error,setError]=useState([])

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      
      // Submit registration data
       const response= await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
        if(!response.data.error){
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.user.name);
        localStorage.setItem('role', response.data.user.role);
        localStorage.setItem('id', response.data.user.id);
        nav("/")
        
        
        }else{
          setError([...response.data.error])
        }
      
    } catch (error) {
      console.log("Error: ", error);
    }

    // Clear form fields
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <form className='register' method='post' onSubmit={handleSubmit}>
        <h2>Login</h2>


        <div>
          <input type='email' onChange={handleEmail} value={email} placeholder='Email' required />
          <span>*</span>
        </div>

        <div>
          <input type='password' onChange={handlePassword} value={password} placeholder='Password' required />
          <span>*</span>
        </div>
        <p style={{color:'red'}} >{error}</p>
        <button className='btn' type='submit'>Login</button>
        <Link to="/register">Don't have account?</Link>
      </form>
    </>
  );
};

export default Login;
