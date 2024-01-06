
//import axios from 'axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
//import { Link, useNavigate } from 'react-router-dom';

const Cart = (props) => {
    let isPropes=""
   
    if (props.type !== undefined) {
       isPropes=props.type;
    }
  
    const { cart, user } = useSelector((store) => store.Reducer);
    let [data, setData] = useState([])
    //let navigate = useNavigate();
    let total = 0;
    const loadCart = () => {
        try {
            axios.get("http://localhost:8080/cart")
                .then((res) => {
                    // let d = res.data.filter((val, i) => val.userid == user._id);
                    console.log(res.data)
                })
        }
        catch (error) {
            // navi("/error")
        }
    }
    const removeCart = () => {
        try {
            axios.post("http://localhost:8080/")
                .then((res) => {
                })
        }
        catch (error) {
            // navi("/error")
        }
    }
    useEffect(() => {
        loadCart();
    }, [data, removeCart])



    //<h6>{cart.length} {cart.length<=1?"Product":"Products"}</h6>
    return (
        <div className='col-md-10 col-lg-10 col-sm-10 col-xl-10 mx-auto '>
            <h6 className='formtitle mb-4'><span className='p-2' style={{ borderBottom: "3px solid #328be9" }} >
            {isPropes==""?"Your shopping basket":"Order Summary"}</span></h6>
        
            <div className="flex_box" style={{ background: "white" }} >
                <div className='col-md-7 col-sm-7 col-lg-7 col-xl-7 order-1 ' >
                    {
                        data && data.length > 0 && (<div className='cart_grid'>
                            {

                                data.id.map((ele) => {
                                    total += Number(ele.price);
                                    return (<div className='item'>

                                        <div className='divimg col-md-3 mx-auto'>  <img className='thumbnail' src={ele.image} alt={ele.title}></img></div>
                                        <div className='col-md-9 col-lg-9 col-sm-9 col-xl-9 mx-auto' style={{ display: "flow-root", padding: "0px 0px 0px 15px" }}>
                                            <h6>{ele.title}</h6>
                                            <h5>&#x20B9;{ele.price}</h5>
                                            <div > <span className='text-secondary'>Color:</span> {ele.color}</div>
                                            <p> <span className='text-secondary'>Size:</span> {ele.size}</p>
                                            {/*<div className='text-end'> <span className=' bg-light pt-2 pe-2 ps-2'> Qty:<select className='btn-outline-primary bg-light '><option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                            </select> </span></div>*/}
                                        </div>
                                        <div className=' text-center p-2 d-flex align-item-center justify-content-center border border-end-0 border-start-0 border-bottom-0' >
                                            <h6 onClick={() => removeCart(ele._id)} className=''
                                                style={{ color: "#303AB2", fontSize: "14px", cursor: "pointer" }}> Remove</h6>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>)
                    }
                    {isPropes==""? <div className='col-md-5 col-lg-5 col-sm-5 col-xl-5'>
                        <br></br>
                        <Link to="/product" className='linkp' >  <button className='btn_cart btn btn-primary' >CONTINUE SHOPPING</button></Link>
                    </div>:""}
                </div>
                {user.userid != null  ? "" : (
                    <div className=' order-2 col-md-4 col-lg-4 col-sm-4 col-xl-4 mx-auto div_total'>
                        <div className='head'></div>
                        <div>
                            <h5> Price: ({data.length} Item)<span className='rightxt'>  &#8377; {total} </span></h5>
                            <h5> Discount:  <span className='rightxt'> -&#8377; 500 </span></h5>
                            <h5> Delivery Chagrges:  <span className='rightxt'> Free </span></h5>
                            <h5 className='p-2' style={{ border: "1px dotted gray" }}> <b>Total Amount:</b> <span className='rightxt'> &#8377; {total - 500} </span> </h5>
                            {isPropes==""? <Link to="/order">  <button className='btn_order' >PLACE ORDER</button></Link>:""}
                        </div>
                    </div>)}
            </div>


        </div >
    )


}

export default Cart

