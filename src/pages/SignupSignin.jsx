import React, { useState } from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import { useSelector } from 'react-redux'


function SignupSignin() {
  const [toggle,setToggle]=useState(true)
  const val = useSelector(store =>store)
  console.log(val)
  return (
    <div className='lsmain'>
       <div className='form'>
        {toggle?<Signup/>:<Login/>}
       </div>
      
       <h3 onClick={()=>setToggle(!toggle)} >
       {toggle?<span>Already have a accont</span>:<span>Don't have Account </span>}
       </h3>
     
    </div>
  )
}

export default SignupSignin
