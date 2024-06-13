import React from 'react'

const LoginComponent = () => {
  return (
    <>  <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
    <div className="card p-4" style={{ width: '20rem' }}>
      <div className="card-body">
        <h5 className="card-title text-center">
          <i className="fa fa-lock fa-4x text-success"></i> <h1>LOGIN</h1>
        </h5>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control"
            placeholder='Enter email'
             id="email" aria-describedby="emailHelp" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">SUBMIT</button>
        </form>
      </div>
    </div>
  </div></>
  )
}

export default LoginComponent