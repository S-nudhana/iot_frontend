import React from 'react';
import logo from './sit logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' className='logo-image' />
    </div>
  );
}

export default Navbar;