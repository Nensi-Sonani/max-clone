import React, { useEffect, useState } from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function SignupSignin() {
  const [toggle, setToggle] = useState(true)
  let navi = useNavigate();
  const { isLogin } = useSelector(store => store.Reducer)
  let Login1 = localStorage.getItem("login");
  // console.log(val)
  useEffect(() => {
    if (Login1)
      navi("/")
  }, [])

  return (
    <section className="py-5">
      <div className="container  ">
        <div className="row d-flex align-items-center justify-content-between h-100">
            {toggle ? <Signup /> : <Login/>}
            <div className='"row d-flex align-items-center justify-content-end h-100'>
              <h6 style={{color:"#d01313",textTransform:"uppercase"}} onClick={() => setToggle(!toggle)} >
                {toggle ? <span>Already have an accont</span> : <span>Don't have An Account </span>}
              </h6>
            </div>
          </div>


        </div>
    </section>

  )
}

export default SignupSignin
