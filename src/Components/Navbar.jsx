import React from 'react'
import './Styles/Navbar.css';
import logo from './images/logo.svg'

function Navbar() {
  return (
    <div className='Header'>
        <img src={logo}/>
        <button>Buy Now</button>
    </div>
  )
}

export default Navbar