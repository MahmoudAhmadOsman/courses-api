import React from "react";
import { useState } from "react";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Email is: ", email, "Password", password);
  };
  return (
    <section className="login-page">
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div className="card p-4" style={{ width: "20rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center">
              <i className="fa fa-lock fa-4x text-success" /> <b>LOGIN</b>
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  aria-describedby="emailHelp"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                  aria-describedby="passwordHelp"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
