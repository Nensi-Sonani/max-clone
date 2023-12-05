import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"
import { funSignIn } from '../redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [msg, setMsg] = useState("")
  let dispatch = useDispatch();
  let navi = useNavigate();
  const handleSignin = (e) => {
    e.preventDefault();
    let obj = { email: email, password: password }
    try {
      axios.post("http://localhost:8080/login", obj)
        .then((res) => {
          if ('msg' in res.data) {
            setMsg(res.data.msg)
          }
          else {
            dispatch(funSignIn(res.data))
            navi("/")
          }
        })

    }
    catch (error) {
      console.log(error)
    }


    // navi("/")

  }


  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h6 className='formtitle mb-4'>
                <span className='p-2' style={{ borderBottom: "3px solid #328be9" }} >Sign In</span></h6>
              {msg != "" ? <div className='alert alert-danger'> {msg}</div> : ""}
              <form onSubmit={handleSignin}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control"
                    placeholder='Email Address'
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control form-control"
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

export default Login;
