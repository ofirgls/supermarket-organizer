import React from 'react';
import { useSelector } from 'react-redux';
import './css/CurrentList.css';

const CurrentList = () => {
  const marketList = useSelector((state) => state.market.marketList);
  const categories = [...new Set(marketList.map((product) => product.category))];

  return (
    <div className='list_container'>
      <h2>Current List:</h2>
      <ul className='category_list'>
        {categories.map((category, index) => (
          <li key={index} className='singel_category'>
            <h2>{category}:</h2>
            <ul className='products'>
              {marketList.filter((product) => product.category === category).map((product, subIndex) => (
                <li key={subIndex}>{product.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentList;