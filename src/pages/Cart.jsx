import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    let isPropes = "";

    if (props.type !== undefined) {
        isPropes = props.type;
    }

    const { cart, user } = useSelector((store) => store.Reducer);
    const [data, setData] = useState([]);
    let total = 0;


    const loadCart = async () => {

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
            const response = await axios.post("http://localhost:8080/cart");
            setData(response.data); // Assuming response.data is an array received from the server
        } catch (error) {
            console.error("Error fetching cart data:", error);
            // Handle error or navigate to error page
        }
    };

    const removeCartItem = (itemId) => {
        // Implement logic to remove the item from the cart using its ID (itemId)
        // Example: axios.delete(`http://localhost:8080/cart/${itemId}`).then(...)
    };

    useEffect(() => {
        loadCart();
    }, []);

    return (
        <div className='col-md-10 col-lg-10 col-sm-10 col-xl-10 mx-auto '>
            <h6 className='formtitle mb-4'><span className='p-2' style={{ borderBottom: "3px solid #328be9" }} >
            {isPropes === "" ? "Your shopping basket" : "Order Summary"}</span></h6>

            <div className="flex_box" style={{ background: "white" }}>
                <div className='col-md-7 col-sm-7 col-lg-7 col-xl-7 order-1'>
                    {
                        data && data.length > 0 && (
                            <div className='cart_grid'>
                                {data.map((ele) => {
                                    total += Number(ele.price);
                                    return (
                                        <div className='item' key={ele.id}>
                                            {/* Your item display logic */}
                                            <h6>{ele.title}</h6>
                                            {/* ... */}
                                            <h5>&#x20B9;{ele.price}</h5>
                                            <div>
                                                <span className='text-secondary'>Color:</span> {ele.color}
                                            </div>
                                            {/* ... */}
                                            <div className=' text-center p-2 d-flex align-item-center justify-content-center border border-end-0 border-start-0 border-bottom-0'>
                                                <h6 onClick={() => removeCartItem(ele.id)} className='' style={{ color: "#303AB2", fontSize: "14px", cursor: "pointer" }}> Remove</h6>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )
                    }
                    {isPropes === "" && (
                        <div className='col-md-5 col-lg-5 col-sm-5 col-xl-5'>
                            <br />
                            <Link to="/product" className='linkp' >
                                <button className='btn_cart btn btn-primary' >CONTINUE SHOPPING</button>
                            </Link>
                        </div>
                    )}
                </div>
                {user.userid != null ? "" : (
                    <div className=' order-2 col-md-4 col-lg-4 col-sm-4 col-xl-4 mx-auto div_total'>
                        <div className='head'></div>
                        <div>
                            <h5> Price: ({data.length} Item)<span className='rightxt'>&#8377; {total}</span></h5>
                            {/* Other price details */}
                            {isPropes === "" && (
                                <Link to="/order">
                                    <button className='btn_order'>PLACE ORDER</button>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
