import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { funSignUp } from '../redux/Action';

const Signup = () => {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPasword]=useState("")
  let [msg,setMsg]=useState("")
  let dispatch=useDispatch();
  const handleSignup=(e)=>{
    e.preventDefault();
    let obj={username:name,email:email,password:password}
   // dispatch(funSignUp());
  
   axios.post("http://localhost:8080/signup",obj)
   .then((res)=>setMsg(res.data))
  }
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            {msg}
              <form onSubmit={handleSignup}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                  onChange={(e)=>setName(e.target.value)}
                  placeholder='User Name'
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder='Email Address'
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    onChange={(e)=>setPasword(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder='Password'
                  />
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* Checkbox */}
                 
                  <a href="#!">Forgot password?</a>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

               
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
