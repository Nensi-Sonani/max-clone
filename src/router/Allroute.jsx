import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Women from '../pages/Women'
import Signup from '../pages/SignupSignin'
import Men from '../pages/Men'
import Girl from '../pages/Girl'
import Boy from '../pages/Boy'
// import Notfound from '../pages/Notfound'

const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Women" element={<Women/>}/>
        <Route path="/Women" element={<Men/>}/>
        <Route path="/Girl" element={<Girl/>}/>
        <Route path="/Boy" element={<Boy/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path='/SignupSignin' element={<Signup/>}/>
        {/* <Route path='*' element={<Notfound/>}/>      */}
      </Routes>
    </div>
  )
}

export default Allroute