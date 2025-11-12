import React from 'react'
import '..src/App.css'

const UserLogin = () => {
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