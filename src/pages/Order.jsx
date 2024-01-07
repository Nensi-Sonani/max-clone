// import React from 'react'
// import Cart from './Cart'
// import { Formik, Form } from 'formik'
// import * as Yup from 'yup'
// import TextField from '../components/TextField'
// import { Link } from 'react-router-dom'

// const Order = () => {
//     const validate = Yup.object({
//     firstName: Yup.string()
//         .max(20, "Must be 20 characters or less")
//         .required('Required'),
//     lastName: Yup.string()
//         .max(25, "Must be 25 characters or less")
//         .required("Required"),
//     mobileNo: Yup.string()
//         .min(10, "Mobile no must be 10 digits")
//         .max(10, "Mobile no must be 10 digits")
//         .required("Required"),
//     email: Yup.string()
//         .email("Email is invalid")
//         .required("Required"),
//     pincode: Yup.string()
//         .min(6, "Pincode must be 6 digits")
//         .max(6, "Pincode must be 6 digits")
//         .required("Required"),
//     address: Yup.string()
//         .max(100, "Must be 100 characters or less")
//         .required("Required"),
// });

//     return (
//         <div className='col-md-10 col-lg-10 col-sm-10 col-xl-10 mx-auto '>
//             <h6 className='formtitle mb-4'><span className='p-2' style={{ borderBottom: "3px solid #328be9" }} >Shipping</span></h6>
//             <div className='flex_box1' style={{ background: "white" }} >
//                 <div className=' order-1 '>


//                     <Formik
//                         initialValues={{
//                             firstName: '',
//                             lastName: '',
//                             mobileNo: "",
//                             email: '',
//                             address: '',
//                             pincode: ""

//                         }}
//                         validationSchema={validate}
//                         onSubmit={values => {

//                         }}
//                     >
//                         {formik => (
//                             <div className='mb-5'>
//                                 <Form>
                                
//                                     <TextField label="First Name" name="firstName" type="text" />
//                                     <TextField label="Last Name" name="lastName" type="text" />
//                                     <TextField label="Mobile No" name="mobileNo" type="number" />
//                                     <TextField label="Address" name="address" type="text" />
//                                     <TextField label="Pincode" name="pincode" type="number" />
//                                  <Link to="/orderplaced">  <button class="btn btn-primary mt-3 btn_order" type="submt">Place Order</button></Link> 
//                                 </Form>
//                             </div>

//                         )}
//                     </Formik>

//                 </div>
//                 <div className='order-1 '>
//                     <Cart type="shipping" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Order