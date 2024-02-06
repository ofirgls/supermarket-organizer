import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header_container'>   
      <Link to="/">List history</Link>
      <Link to="/currentlist">Current list</Link>
      <Link to="/">HomePage</Link>
    </div>
  )
}

export default Header