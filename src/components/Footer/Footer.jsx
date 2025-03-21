import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, minima provident mollitia voluptas, quaerat, odio temporibus itaque id tempore et laboriosam facilis beatae accusantium dolorum velit ea hic laudantium? Sed.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
              <h2>COMPANY</h2>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Delivery</a></li>
                <li><a href="">Privacy Policy </a></li>
              </ul>
            </div>
            <div className="footer-content-center">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>copyright 2025 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
