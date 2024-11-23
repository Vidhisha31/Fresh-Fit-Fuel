import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} />
            <p>© 2024 Fresh Fit Fuel. All rights reserved. Follow us on Facebook, Instagram, and Twitter. Contact us at contact@freshfitfuel.com or call +91 7425874233 Download our app on the App Store and Google Play.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} />
                <img src={assets.linkedin_icon} />
                <img src={assets.twitter_icon} />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delievery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7425874232</li>
                <li>contact@freshfitfuel.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © Fresh-Fit-Fuel.com - All rights reserved</p>
    </div>
  )
}

export default Footer
