import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer_text' style={{fontSize:"0.8rem"}}>
<br></br><br></br>
      <footer className="text-center text-lg-start  text-white" style={{background:"#303ab2"}}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>About Company 
                </h6>
                <p  className='footer_text'>
                Launched in the UAE in May 2004, Max Fashion is now in over 850+ stores across 20 countries. We opened doors in Indore, India in 2006. There has been no looking back. Our reach in the country today extends to 200+ cities, boasting a loyal customer base of close to 35 million.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  ONLINE SHOPPING
                </h6>
               
                <p>
                  <Link to="/product/men" className="text-reset">Men</Link>
                </p>
                <p>
                  <Link to="/product/women" className="text-reset">Women</Link>
                </p>
                <p>
                  <Link to="/product/girl" className="text-reset">Kids</Link>
                </p>
                <p>
                  <Link to="/product/boy" className="text-reset">Boys</Link>
                </p>

              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  POLICIES
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>

              <div className=" footer_text col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4 ">Contact</h6>
                <p><i className="fas fa-phone me-3">Help centre:</i>help@maxfashion.com</p>
                <p><i className="fas fa-phone me-3">Talk to us:</i>1800-458-4444</p>
                <p><i className="fas fa-phone me-3">Write to us:</i>lsocare@maxfashion.com</p>
              </div>

            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundcolor: "rgba(0, 0, 0, 0.05)" }}>
          Copyright © 2023 - max fashion . All rights reserve
        </div>

      </footer>
    </div>

  );
};

export default Footer;
