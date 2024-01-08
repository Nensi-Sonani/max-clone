import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { funSignUp } from '../redux/Action';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPasword] = useState("")
  let [msg, setMsg] = useState("")
  let navi = useNavigate();
  let dispatch = useDispatch();
  let storeData = useSelector((store) => store.Reducer)
  const handleSignup = (e) => {
    try{
    e.preventDefault();
    let obj = { username: name, email: email, password: password }
    dispatch(funSignUp(obj));
    
    }
    catch(error)
    {
      alert("enter all fields")
    }
  }
  useEffect(() => {
    if (storeData.isLogin)
      navi("/")
    if (storeData.msg) setMsg(storeData.msg)
  },[handleSignup])
  //   try {
  //     axios.post("http://localhost:8080/signup", obj)
  //       .then((res) =>{
  //         setMsg(res.data.msg)
  //         setEmail("")
  //         setName("");
  //         setPasword("")
  //       }).then(()=>{
  //         setEmail("")
  //         setName("");
  //         setPasword("")
  //       }
  //       )
  //   }
  //   catch (error) {
  //     navi("/error")
  //   }
  // }

  return (
    <div>
      <section className="py-1">
        <div className="container  ">
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
                <span className='p-2' style={{ borderBottom: "3px solid #328be9" }} >Sign Up</span></h6>
              {msg != "" ? <div className='alert alert-success'>{msg}</div> : ""}

              <form onSubmit={handleSignup}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder='User Name'
                    className="form-control form-control"
                  />
                </div>
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
                    onChange={(e) => setPasword(e.target.value)}
                    className="form-control form-control"
                    placeholder='Password'
                  />
                </div>

                {/*<div className="d-flex justify-content-around align-items-center mb-4">
                   Checkbox */}

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign up
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
