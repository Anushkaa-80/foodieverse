import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const UserRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Create an account</h2>
        <p className="auth-sub">Sign up to discover and order from nearby restaurants.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="form-row">
            <span>Name</span>
            <input type="text" placeholder="Full name" />
          </label>

          <label className="form-row">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>

          <label className="form-row">
            <span>Password</span>
            <input type="password" placeholder="••••••••" />
          </label>

          <label className="form-row">
            <span>Confirm Password</span>
            <input type="password" placeholder="••••••••" />
          </label>

          <button className="btn btn-primary" type="submit">Create account</button>
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
  )
}

export default UserRegister