import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Signup from '../pages/SignupSignin'
import Product from '../pages/Product'
import SignupSignin from '../pages/SignupSignin'
import { ProductDetail } from '../pages/ProductDetail'
// import Notfound from '../pages/Notfound'

const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/Men" element={<Product/>}/>
        <Route path="/product/Girl" element={<Product/>}/>
        <Route path="/product/Boy" element={<Product/>}/>
        <Route path="/productdetail/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/signupSignin' element={<SignupSignin/>}/>
        {/* <Route path='*' element={<Notfound/>}/>      */}
      </Routes>
    </div>
  )
}

export default Allroute