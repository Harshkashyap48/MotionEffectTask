import React from 'react';
import logo from './images/MotionArtEffect-logo.png';
import './Styles/Header.css';

const Header = () => (
  <div className='header'>
    <img src={logo} alt="Logo" />
    <button>Purchase Now</button>
  </div>
);

export default Header;
