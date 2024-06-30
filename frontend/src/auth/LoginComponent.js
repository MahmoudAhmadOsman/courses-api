import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async e => {
    e.preventDefault();

    await login(email, password); //logout the user
  };
  return (
    <section className="login-page">
      <div className="d-flex justify-content-center align-items-center 
      vh-100 overflow-hidden ">
        <div
          className="card p-4 shadow-lg p-3 mb-5 bg-white rounded"
          style={{ width: "23rem" }}
        >
          <div className="card-body">
            <h5 className="card-title text-center">
              <i className="fa fa-lock fa-4x text-primary" /> <hr />
              <b className="h2 opacity-50">Login</b> <br /> <br /> <br />
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
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
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  id="password"
                  aria-describedby="passwordHelp"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
                    <div className="d-grid gap-2 mt-3">
										<button
											type="submit"
											className="btn btn-outline-primary fw-bold btn-lg"
											 
											disabled={isLoading || !email || !password}
										>
											{!error && isLoading ? (
												<>
													<span
														className="spinner-border spinner-border-sm me-3"
														role="status"
														aria-hidden="true"
														style={{ width: "1.5rem", height: "1.5rem" }}
													></span>
													<small
														className="text-muted"
														style={{ fontSize: "12px" }}
													>
														Please wait...
													</small>
												</>
											) : (
												<div>LOGIN</div>
											)}
										</button>
		

{/*   <button
                type="submit"
                className="btn btn-outline-primary btn-lg fw-bold"
                disabled={!email || !password}
              >
                SUBMIT
              </button> */}						</div>

				
            
            </form>
            <br /> <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
