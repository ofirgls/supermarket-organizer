import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const marketlistproducts = useSelector((state)=>state.market.marketList);
  
  return (
    <div className='header_container'>   
      <Link to="/currentlist">
        {marketlistproducts.length > 0 ? 
        <button className='num_of_products'>
          {marketlistproducts.length}
        </button>
        : ""}
        Current list</Link>
      <Link to="/">HomePage</Link>
    </div>
  )
}

export default Header;
