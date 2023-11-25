import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { funAddCart } from '../redux/Action';
import { Carousel } from 'react-bootstrap';

export const ProductDetail = () => {
    const { id } = useParams();
    let [data, setData] = useState("")
    let userId = useSelector((stor) => stor.Reducer.user._id)
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const livejsonServer = "http://localhost:8080"

    const fetchProductDetail = () => {
        axios.get(`${livejsonServer}/products/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => console.log(error))
    }
    const handleCart = () => {
        if (userId == null)
            navigate("/signupSignin")
        let objcart = { userid: userId, id: data._id }
        dispatch(funAddCart(objcart));
        navigate("/cart")
    }
    useEffect(() => {
        fetchProductDetail();
    }, [])
    return (
        <div>
            <div className='col-md-10 mx-auto ' >
                {data != null ? (<div><div className='text-left detailtitle'>{data.title}</div>
                    <div className='flex_box '>
                        <div className='col-md-7 mx auto' >
                            <div className='detail_image'>

                                <Carousel data-bs-theme="dark">

                                    {
                                        data && data.image.length > 0 &&
                                        data.image.map((element) => {
                                            return (<Carousel.Item>
                                                <img className='d-block w-100' src={element} text="First slide" />
                                            </Carousel.Item>)
                                        })
                                    }


                                </Carousel>
                            </div>
                        </div>
                        <div className='col-md-5 mx auto detail_block'>

                            <h2 className='text-left'> &#8377;{data.price}</h2>

                            <div className='divfeature text-left' > <div className='tag '>Color:</div><span className='divcolor' style={{ background: `${data.color}` }}></span></div>
                            <div className='divfeature text-left' ><span className='tag'>Overview</span>
                                <p>{data.description} </p></div>

                            <div className='divfeature text-left custome-radio mb-3'><div className='tag' >Select Size:</div>
                                <input className='form-check-input ' value="s" name="flexRadioDefault" type="radio"></input><label>S</label>
                                <input className='form-check-input ' value="m" name="flexRadioDefault" type="radio"></input><label>m</label>
                                <input className='form-check-input ' value="l" name="flexRadioDefault" type="radio"></input><label>l</label>
                                <input className='form-check-input ' value="xl" name="flexRadioDefault" type="radio"></input><label>xl   </label>
                            </div>
                            <div className='mx-2  mb-4 '>
                                <button onClick={handleCart} className='btn_cart p-3 btn btn-primary' >ADD TO BASKET</button>
                            </div>

                            <div className='mb-5'>
                                <div className='mx-auto add_fav col-md-11 mb-3'>
                                    <h6>  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ms-5 bi bi-bag-heart" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                    </svg> Add to favourite</h6>
                                </div>
                                <div className='col-md-10 mx-auto '>
                                    <h6><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" mx-2 bi bi-house-check-fill" viewBox="0 0 16 16">
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                                        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z" />
                                    </svg>click & collect</h6>
                                    <p className='ms-5'>Order this product now and collect it from a store of your choice</p>
                                    <h6><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mx-2 bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>Pay in installments</h6>
                                    <p className='ms-5'>Pay in easy installments on orders of ₹ 3,000 or more. Available for select banks.</p>
                                    <h6><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mx-2 bi bi-arrow-left-square" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                    </svg>5 days return policy (conditions apply) </h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>) : ""
                }
            </div>
        </div>
    )
}
