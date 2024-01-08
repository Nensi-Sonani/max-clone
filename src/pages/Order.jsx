

// import React, { useState } from 'react'
// import Cart from './Cart'
// import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
// import TextField from '../components/TextField'
// import { Link } from 'react-router-dom'

// const Order = () => {
//     let [userData, setUserData] = useState({})
//     const validate = Yup.object({
//         firstName: Yup.string()
//             .max(20, "Must be 20 character or less")
//             .required('Required'),
//         lastName: Yup.string()
//             .max(25, "Must be 25 character or less")
//             .required("Required"),
//         mobileNo: Yup.string()
//             //.min(10,"Mobile no must be 10 digit" )
//             .max(10, "Mobile no must be 10 digit")
//             .required("Required"),
//         email: Yup.string()
//             .email("Email is invalid")
//             .required("Required"),
//         pincode: Yup.string()
//             //ss.min(6, "pincode must be 6 digit")
//             .max(6, "pincode must be 6 digit")
//             .required("required"),
//         address: Yup.string()
//             .max(50, "Must be 50 character or less")
//             .required("Required"),
//     })
//     return (
//         <div className='col-md-10 col-lg-10 col-sm-10 col-xl-10 mx-auto '>
//             <h6 className='formtitle mb-4'><span className='p-2' style={{ borderBottom: "3px solid #328be9" }} >Shipping</span></h6>
//             <div className='flex_box1' style={{ background: "white" }} >
//                 <div className=' order-1 '>
                    
//                         {formik => (
//                             <div className='mb-5'>
//                                 <Form>

//                                     <TextField label="First Name" name="firstName" type="text"
//                                         onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
//                                     />
//                                     <TextField label="Last Name" name="lastName" type="text"
//                                         onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
//                                     />
//                                     <TextField label="Mobile No" name="mobileNo" type="number"
//                                         onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
//                                     />
//                                     <TextField label="Address" name="address" type="text"
//                                         onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
//                                     />
//                                     <TextField label="Pincode" name="pincode" type="number"
//                                         onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
//                                     />
//                                     <Link to="/orderplaced">  <button class="btn btn-primary mt-3 btn_order" type="submt">Place Order</button></Link>
//                                 </Form>
//                             </div>
//                         )}
//                 </div>
//                 <div className='order-1 '>
//                     <Cart type="shipping" />
//                 </div>            </div>
//         </div>
//     )
// }


//  export default Order