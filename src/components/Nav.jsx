import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { GiToggles } from "react-icons/gi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/nav.css'
import { useDispatch, useSelector } from 'react-redux';
import { funLogout } from '../redux/Action';

const Nav = () => {
  let storeData = useSelector((store) => store.Reducer)
  console.log(storeData)
  let dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(funLogout())
  }
  return (
    <div className="Nav container">
      <div className="toggle">
        <span><GiToggles /></span>
      </div>

      <Link to="/" className="link">

        <img src="https://i1.lmsin.net/website_images/in/logos/logo-max.svg" />
      </Link>

      <Link to="/Product/women" className="link">
        <span>Women</span>
      </Link>
      <Link to="/Product/men" className="link">
        <span>Men</span>
      </Link>
      <Link to="/Product/girl" className="link">
        <span>Girl</span>
      </Link>
      <Link to="/Product/boy" className="link">
        <span>Boy</span>
      </Link>
      {/*<Form inline className='navform'>

        <InputGroup>
          <InputGroup.Text id="basic-addon1"><BiSearch /></InputGroup.Text>
          <Form.Control
            placeholder="What are you looking for ?"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
  </Form> <spanG?OUT
       ><AiOutlineHeart /></spanG?OUT>*/}
       {storeData.isLogin ? <button className='btn btn-outline text-danger border ' onClick={handleLogout} >LOGOUT</button>
       :""}
      {!storeData.isLogin ? (<Link to="/signupSignin" className="link signin"><p>Sign Up/Sign In </p></Link>)
        : (<Link className="link cart"><p>Hi {storeData.user.username}</p>
        </Link>)}

      <Link to="/Cart" className="link cart">
        <BsFillBagFill />
      </Link>




    </div>
  )
}

export default Nav