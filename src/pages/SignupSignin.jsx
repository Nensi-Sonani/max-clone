import React, { useState } from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import { useSelector } from 'react-redux'


function SignupSignin() {
  const [toggle, setToggle] = useState(true)
  const val = useSelector(store => store)
  // console.log(val)
  return (
    <div>
      {toggle ? <Signup /> : <Login />}
      <div className='text-center'>
        <h5 onClick={() => setToggle(!toggle)} >
          {toggle ? <span>Already have a accont</span> : <span>Don't have Account </span>}
        </h5>
      </div>


    </div >

  )
}

export default SignupSignin
