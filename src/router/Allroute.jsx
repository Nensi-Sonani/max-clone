import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Signup from '../pages/SignupSignin'
import Product from '../pages/Product'
import SignupSignin from '../pages/SignupSignin'
import { ProductDetail } from '../pages/ProductDetail'
import Error from '../pages/Error'
import Order from '../pages/Order'
import Orderplaced from '../pages/Orderplaced'
// import Notfound from '../pages/Notfound'

const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} >
        <Route path="/product/:category" element={<Product />} />
        </Route>
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/signupSignin' element={<SignupSignin />} />
        <Route path="/error" element={<Error/>}/>
        <Route path="/order" element={<Order/>} />
        <Route path="/orderplaced" element={<Orderplaced/>} />
        {/* <Route path='*' element={<Notfound/>}/>      */}
      </Routes>
    </div>
  )
}

export default Allroute