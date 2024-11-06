import React from 'react';
import './footer.css';
import { FaFacebook , FaInstagram , FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='footer col-12 d-flex justify-content-between'>
         <div className='col-4 p-3 section'>
            <h2 className='logo'>my<span className='R'>R</span>esturant</h2>
            <h3>The Best Experiences For The Best Taste</h3>
         </div>
         <div className='col-4 p-3 icons text-center'>
           <FaFacebook className='icon'/>
           <FaInstagram className='icon'/>
           <FaWhatsapp className='icon'/>
           <p>Contact Us..! </p>
         </div>
      </div>
    </>
  )
}

export default Footer
