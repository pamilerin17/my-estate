// import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="social">
       <FaInstagram/>
       <FaFacebookF/>
       <FaLinkedin/>
       <FaTwitter/>
      </div>
        <div className="footer-text">
      <p>Copyright &copy; 2025 <span id="year"></span> | All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer
