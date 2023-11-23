import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/nav.css'
const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/" className="link">
        <img src="https://i1.lmsin.net/website_images/in/logos/logo-max.svg" />
      </Link>
      <Link to="/Product/Women" className="link">
        <span>Women</span>
      </Link>
      <Link to="/Product/Men" className="link">
        <span>Men</span>
      </Link>
      <Link to="/Product/Girl" className="link">
        <span>Girl</span>
      </Link>
      <Link to="/Product/Boy" className="link">
        <span>Boy</span>
      </Link>
      <Form inline className='navform'>
        <InputGroup>
          <InputGroup.Text id="basic-addon1"><BiSearch /></InputGroup.Text>
          <Form.Control
            placeholder="What are you looking for ?"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Link to="/signupSignin" className="link">
        <p>Sign Up/Sign In <span><AiOutlineHeart /></span></p>
      </Link>
      <Link to="/Cart" className="link">
        <BsFillBagFill />
      </Link>

    </div>
  )
}

export default Nav