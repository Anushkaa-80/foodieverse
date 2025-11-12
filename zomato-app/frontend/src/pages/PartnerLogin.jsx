import React from 'react'
import "../App.css";

const PartnerLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Partner sign in</h2>
        <p className="auth-sub">Access your restaurant dashboard.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="form-row">
            <span>Email</span>
            <input type="email" placeholder="you@restaurant.com" />
          </label>

          <label className="form-row">
            <span>Password</span>
            <input type="password" placeholder="••••••••" />
          </label>

          <button className="btn btn-primary" type="submit">Sign in</button>
        </form>

        <div className="auth-foot">
          Need an account? <a href="/food-partner/register">Register</a>
        </div>
      </div>
    </div>
  )
}

export default PartnerLogin