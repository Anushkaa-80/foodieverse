import React from 'react'
import "../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
 
  const navigate = useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();

    // Collect form data
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = axios.post("http://localhost:3000/api/auth/user/login",{
      email,
      password},{

        
      }); withCredentials: true // to allow cookies from backend, to save the token in cookies  
      
  }
 
 
 
 
 
 
 
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-sub">Sign in to continue ordering.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="form-row">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>

          <label className="form-row">
            <span>Password</span>
            <input type="password" placeholder="••••••••" />
          </label>

          <button className="btn btn-primary" type="submit">Sign in</button>
        </form>

        <div className="auth-foot">
          New here? <a href="/user/register">Create an account</a>
        </div>
      </div>
    </div>
  )
}

export default UserLogin