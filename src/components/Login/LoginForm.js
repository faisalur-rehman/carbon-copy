import React from "react";

const LoginForm = ({
  handleSubmit,
  email,
  password,
  setEmail,
  setPassword,
  response,
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
                  />
                </div>
                <div className="input_field">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </div>
                <div className="submit_btn">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
            <p style={{ color: "red" }}>{response}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
