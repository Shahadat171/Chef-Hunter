import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg-dark text-light pl-16 pr-16 py-5  mt-5">
      <div className="d-flex justify-content-between">
        <div className="mx-5">
          <h4 className="text-3xl font-bold opacity-70">AnnaMaya</h4>
        </div>
        <div className="mx-5 flex">
          <FaFacebook className="me-2 opacity-70" style={{ width: "50px", height: "35px" }}></FaFacebook>
          <FaTwitter className="me-2 opacity-70" style={{ width: "50px", height: "35px" }}></FaTwitter>
          <FaInstagram className="opacity-70" style={{ width: "50px", height: "35px" }}></FaInstagram>
        </div>
      </div>
      <div className="d-flex justify-content-between mx-5 mt-5 mb-3 mobile">
        <div>
          <li className="mb-2 opacity-70 font-sans tracking-wider"  style={{listStyleType: 'none'}}>Chef</li>
          <li className="mb-2 opacity-70 font-sans tracking-wider"  style={{listStyleType: 'none'}}>Stores</li>
          <li className="mb-2 opacity-70 font-sans tracking-wider"  style={{listStyleType: 'none'}}>Professionals</li>
        </div>
        <div>
          <li className="mb-2 opacity-70 font-sans tracking-wider"  style={{listStyleType: 'none'}}>Local Meetups</li>
          <li className="mb-2 opacity-70 font-sans tracking-wider"  style={{listStyleType: 'none'}}>Workshops</li>
          <li className="mb-2 opacity-70 font-sans tracking-wider"  style={{listStyleType: 'none'}}>Communities</li>
        </div>
        <div>
          <li className="mb-2 opacity-70 font-sans tracking-wider"  style={{listStyleType: 'none'}}>Contact Form</li>
          <li className="mb-2 opacity-70 font-sans tracking-wider"  style={{listStyleType: 'none'}}>Work With Us</li>
          <li className="mb-2 opacity-70 font-sans tracking-wider"  style={{listStyleType: 'none'}}>Visit Us</li>
        </div>
        <div>
          <li className="mb-2 opacity-70 font-sans tracking-wider text-end"  style={{listStyleType: 'none'}}>Webinars</li>
          <li className="mb-2 opacity-70 font-sans tracking-wider text-end"  style={{listStyleType: 'none'}}>Local Meetups</li>
          <li className="mb-2 opacity-70 font-sans tracking-wider text-end"  style={{listStyleType: 'none'}}>Discount</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
