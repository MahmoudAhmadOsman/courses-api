import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
const SignupComponent = () => {
   const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

 

  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [disable, setDisable] = useState(true);

 
  const { signup, error, isLoading } = useSignup(); //signup, error, isLoading: are imported fron userSignup hook
  // Show or hide password
  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };

 

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          await signup(
              firstName,
              lastName,
              email,
              password,
          
          ); //send the request to the backend by create custom hook called [useSignup]
        
      } catch (error) {
          console.log("Sign up form error: ", error.message);
          throw new Error("Unable to register!", error.message);
      }
  };

//   const validateEmail = (input) => {
//        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return pattern.test(input);
//   };

//   const handleEmailChange = (e) => {
//       const inputEmail = e.target.value;
//       setEmail(inputEmail);
//       setEmailError(!validateEmail(inputEmail));
//   };

 
  return (
      <section className="sign-up">
          <div className="container">
              <div className="row">
                  <div className="col-md-10 mx-auto mt-4 mb-4 ">
                      <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                          <div className="card-body">
                              <div className="bg-secondary p-3 p-md-5">
                                  {error && (
                                      <p className="text-danger text-center fs-4 border border-danger p-2">
                                          {error}
                                      </p>
                                  )}

                                  <form className="signup" onSubmit={handleSubmit}>
                                      {!error ? (
                                          <>
                                              <h3 className="text-uppercase text-center text-dark ">
                                                  Register
                                              </h3>
                                              {/* <hr /> */}
                                          </>
                                      ) : (
                                          ""
                                      )}
 
                                          <>
                                           
                                              {/* FirstName */}
                                              <div className="form-group mb-3">
                                                  <label className="form-label" htmlFor="firstName">
                                                      First Name <span className="text-danger">*</span>
                                                  </label>
                                                  <input
                                                      type="text"
                                                      id="firstName"
                                                      placeholder="First name"
                                                      className="form-control form-control-lg "
                                                      name="firstName"
                                                      min={3}
                                                      value={firstName}
                                                      onChange={(e) => setFirstName(e.target.value)}
                                                  />

                                                  {error && (
                                                      <span className="text-danger">
                                                          {firstName.length === 0
                                                              ? "First name is required!!"
                                                              : firstName.length < 2
                                                              ? "First name must be equal or greater than 3 characters!!"
                                                              : null}
                                                      </span>
                                                  )}
                                              </div>
                                              {/* Last name */}
                                              <div className="form-group mb-3">
                                                  <label className="form-label" htmlFor="lastName">
                                                      Last Name <span className="text-danger">*</span>
                                                  </label>
                                                  <input
                                                      type="text"
                                                      id="lastName"
                                                      placeholder="Last name"
                                                      className="form-control form-control-lg "
                                                      name="lastName"
                                                      value={lastName}
                                                      onChange={(e) => setLastName(e.target.value)}
                                                  />

                                                  {error && (
                                                      <span className="text-danger">
                                                          {lastName.length === 0
                                                              ? "Last name is required!!"
                                                              : lastName.length < 2
                                                              ? "Last name must be equal or greater than 3 characters!!"
                                                              : null}
                                                      </span>
                                                  )}
                                              </div>

                                              {/* Email address */}

                                              <div className="form-group mb-3">
                                                  <label className="form-label" htmlFor="email">
                                                      Email Address <span className="text-danger">*</span>
                                                  </label>
                                                  <input
                                                      type="email"
                                                      id="email"
                                                      placeholder="Valid mail"
                                                      className="form-control form-control-lg "
                                                      name="email"
                                                      pattern="[^ @]*@[^ @]*"
                                                      // value={email}
                                                      value={email || ""}
                                                      onChange={(e) => setEmail(e.target.value)}
                                                    //   onMouseLeave={handleEmailChange}
                                                  />
                                                  {error && email.length === 0 && (
                                                      <span className="text-danger">
                                                          Email is required!
                                                      </span>
                                                  )}
                                                  {emailError && email && (
                                                      <span className="text-danger">
                                                          Please, enter valid email address!
                                                      </span>
                                                  )}
                                              </div>

                                              <div className="form-group mb-3">
                                                  <label className="form-label" htmlFor="password">
                                                      Password <span className="text-danger">*</span>
                                                  </label>
                                                  <div className="input-group">
                                                      <input
                                                          type={showPassword ? "text" : "password"}
                                                          id="password"
                                                          placeholder="Password"
                                                          className="form-control form-control-lg "
                                                          name="password"
                                                          value={password}
                                                          onChange={(e) => setPassword(e.target.value)}
                                                      />
                                                      <button
                                                          type="button"
                                                          className="btn btn-outline-secondary"
                                                          onClick={togglePasswordVisibility}
                                                      >
                                                          <i className="fa fa-eye" aria-hidden="true"></i>
                                                      </button>
                                                  </div>

                                                  {error && (
                                                      <span className="text-danger">
                                                          {password.length === 0
                                                              ? "Password is required!!"
                                                              : password.length < 2
                                                              ? "Password must be equal or greater than 8 characters!!"
                                                              : null}
                                                      </span>
                                                  )}
                                              </div>

                                              <button
                                                  className="btn btn-outline-primary btn-lg"
                                                //   onClick={nextStep}
                                                  disabled={
                                                      (disable && firstName === "") ||
                                                      lastName === "" ||
                                                      emailError ||
                                                      email === "" ||
                                                      password === ""
                                                  }
                                              >
                                                  Next
                                              </button>
                                          </>
                                 

                                      {/* End of Step 1 */}

                                     

                                
                                  </form>
                                  <p className="text-muted mt-2">
                                      Already have an account? &nbsp;
                                      <Link className="text-primary" to="/auth/login">
                                          Sign In
                                      </Link>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default SignupComponent;
