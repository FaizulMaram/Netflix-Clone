import React from 'react';
import Youtube_icon from '../../assets/youtube_icon.png';
import Facebook_icon from '../../assets/facebook_icon.png';
import Twitter_icon from '../../assets/twitter_icon.png';
import Instagram_icon from '../../assets/instagram_icon.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={Facebook_icon} alt="Facebook" />
        <img src={Instagram_icon} alt="Instagram" />
        <img src={Twitter_icon} alt="Twitter" />
        <img src={Youtube_icon} alt="YouTube" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Netflix Originals</li>
      </ul>
      <p className='copyright-text'>© 2023 Netflix, Inc. All rights reserved.</p>
    </div>
  );
}

export default Footer;