import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors,setErrors]=useState({})
  const nav=useNavigate();

  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleConfirm(event) {
    setConfirm(event.target.value);
  }
// Validations
  const Validations=()=>{
    let formError={}
    if(!name){
      formError.name="Name is Required"
    }
    if(!email){
      formError.email="Email is Required"
    }
    if(!password){
      formError.password='Password is reqired'
    }else if(password.length<8){
      formError.password='Your Password less than 8 Characters'
    }else if( ! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.,/,!,@,#,$,%,^,&,*])/.test(password))
      {
        formError.password='Your Password should have these [a-z]+[A-Z]+[0-9]+[.,/,!,@,#,$,%,^,&,*] '
      }
      if(confirm!=password){
        formError.confirm="The Password isn't Match"
      }else if(!confirm){
        formError.confirm="Confirmation is required"
      }
      return formError
  }  

// ==========================================================
// axios
  async function handleSubmit(event) {
    event.preventDefault();
  const FormErrors =Validations();
  if(Object.keys(FormErrors).length === 0){
    
        try {
          // Submit registration data
          await axios.post(
            "http://127.0.0.1:8000/api/register",
            {
              name: name,
              email: email,
              password: password,
              password_confirmation: confirm
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
              withCredentials: true
            }
          );
    
          nav("/")
          
        } catch (error) {
          console.log("Error: ", error);
        }
    
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
        setConfirm('');
        setErrors({})
  }else{
    setErrors(FormErrors)
    
  }
  }

  return (
    <>
      <form className='register' method='post' onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div>
          <input type='text' onChange={handleName} value={name} placeholder='username'/>
          <span>*</span>
          <p style={{ color: 'red' }}>{errors.name}</p>
        </div>

        <div>
          <input type='email' onChange={handleEmail} value={email} placeholder='Email'/>
          <span>*</span>
          <p style={{ color: 'red' }}>{errors.email}</p>
        </div>

        <div>
          <input type='password' onChange={handlePassword} value={password} placeholder='Password'/>
          <span>*</span>
          <p style={{ color: 'red' }}>{errors.password}</p>
        </div>

        <div>
          <input type='password' onChange={handleConfirm} value={confirm} placeholder='Confirm Password'/>
          <span>*</span>
          <p style={{ color: 'red' }}>{errors.confirm}</p>
        </div>
        
        <button className='btn' type='submit'>SignUp</button>
      </form>
    </>
  );
};

export default Register;
