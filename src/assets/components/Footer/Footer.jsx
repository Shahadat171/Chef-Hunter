import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg-dark text-light px-5 py-5 mobile-main mt-5">
      <div className="d-flex justify-content-between">
        <div className=" mx-5">
          <h4>Rajmohol Restora</h4>
        </div>
        <div className=" mx-5">
          <FaFacebook className="me-2" style={{ width: "50px", height: "35px" }}></FaFacebook>
          <FaTwitter className="me-2" style={{ width: "50px", height: "35px" }}></FaTwitter>
          <FaInstagram style={{ width: "50px", height: "35px" }}></FaInstagram>
        </div>
      </div>
      <div className="d-flex justify-content-between mx-5 mt-5 mb-3 mobile">
        <div>
          <li className="mb-2" style={{listStyleType: 'none'}}>Chef</li>
          <li className="mb-2" style={{listStyleType: 'none'}}>Stores</li>
          <li className="mb-2" style={{listStyleType: 'none'}}>Professionals</li>
        </div>
        <div>
          <li className="mb-2" style={{listStyleType: 'none'}}>Local Meetups</li>
          <li className="mb-2" style={{listStyleType: 'none'}}>Workshops</li>
          <li className="mb-2" style={{listStyleType: 'none'}}>Communities</li>
        </div>
        <div>
          <li className="mb-2" style={{listStyleType: 'none'}}>Contact Form</li>
          <li className="mb-2" style={{listStyleType: 'none'}}>Work With Us</li>
          <li className="mb-2" style={{listStyleType: 'none'}}>Visit Us</li>
        </div>
        <div>
          <li className="mb-2" style={{listStyleType: 'none'}}>Webinars</li>
          <li className="mb-2" style={{listStyleType: 'none'}}>Local Meetups</li>
          <li className="mb-2" style={{listStyleType: 'none'}}>Discount</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
