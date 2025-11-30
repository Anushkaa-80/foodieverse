import React from 'react';
import '../App.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


const UserRegister = () => {

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Simple password match check
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Make POST request to backend
      const response = await axios.post("http://localhost:3000/api/auth/user/register", {
        fullName: fullName,
        email,
        password
      },{
        withCredentials: true // to allow cookies from backend, to save the token in cookies
      });

      console.log("User registered:", response.data);
      alert("Account created successfully!");

      navigate("/");
      // e.target.reset(); // clear form

    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed! Check console for details.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Create an account</h2>
        <p className="auth-sub">Sign up to discover and order from nearby restaurants.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="form-row">
            <span>Name</span>
            <input type="text" name="fullName" placeholder="Full name" required />
          </label>

          <label className="form-row">
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label className="form-row">
            <span>Password</span>
            <input type="password" name="password" placeholder="••••••••" required />
          </label>

          <label className="form-row">
            <span>Confirm Password</span>
            <input type="password" name="confirmPassword" placeholder="••••••••" required />
          </label>

          <button className="btn btn-primary" type="submit">
            Create account
          </button>
        </form>

        <div className="auth-foot">
          Already have an account? <Link to="/user/login">Sign in</Link>
          <br />
          <Link to="/user/register">Register as Normal User</Link>
          <br />
          <Link to="/food-partner/register">Register as Food Partner</Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
