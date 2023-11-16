import React from "react";
import "./footer.css";
import logo from "./SITlogo.png";
import {BsFillTelephoneFill,BsFillEnvelopeFill,BsLine,} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-heading">
        <div className="footerLeft">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="footerRight">
          <p><BsFillTelephoneFill />&nbsp;&nbsp; +66 2470 9850</p>
          <p><BsFillEnvelopeFill />&nbsp;&nbsp; webadmin@sit.kmutt.ac.th</p>
          <p><BsLine />&nbsp;&nbsp; @sit.kmutt
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="footer-copyright">
        <center><p>© 2018 School of Information Technology, King Mongkut's University of Technology Thonburi.</p></center>
      </div>  
    </div>
  );
};

export default Footer;
