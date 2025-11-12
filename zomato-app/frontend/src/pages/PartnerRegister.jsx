import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom'

const PartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Partner sign up</h2>
        <p className="auth-sub">Create an account to manage your restaurant and orders.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="form-row">
            <span>Restaurant name</span>
            <input type="text" placeholder="Restaurant or business name" />
          </label>

          <label className="form-row">
            <span>Owner name</span>
            <input type="text" placeholder="Owner full name" />
          </label>

          <label className="form-row">
            <span>Phone</span>
            <input type="tel" placeholder="+1 555 555 555" />
          </label>

          <label className="form-row">
            <span>Email</span>
            <input type="email" placeholder="you@restaurant.com" />
          </label>

          <label className="form-row">
            <span>Password</span>
            <input type="password" placeholder="••••••••" />
          </label>

          <button className="btn btn-primary" type="submit">Create partner account</button>
        </form>

        <div className="auth-foot">
          Already partnered? <Link to="/food-partner/login">Sign in</Link>
          <br />
          <Link to="/user/register">Register as Normal User</Link>
        </div>
      </div>
    </div>
  )
}

export default PartnerRegister