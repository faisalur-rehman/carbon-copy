import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({
  handleSubmit,
  email,
  password,
  setEmail,
  setPassword,
  error,
}) => {
  return (
    <div>
      <section className="login_section">
        <div className="login_container">
          <div className="login_form">
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
              <div className="login_fields">
                <div className="input_field">
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    required
                  />
                </div>
                <div className="input_field">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    required
                  />
                </div>
                <div className="submit_btn">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
            {error.data && (
              <p style={{ color: "red", margin: "10px 0" }}>
                {error.data.message}
              </p>
            )}
            <p>
              Don't have an account? <Link to="/sign-up">Sign Up</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
