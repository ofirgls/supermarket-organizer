import React from 'react';
import { useSelector } from 'react-redux';

const CurrentList = () => {
  const marketList = useSelector((state) => state.market.marketList);
  const categories = [...new Set(marketList.map((product) => product.category))];
  console.log(categories);


  return (
    <div>
      <h2>Current List:</h2>
      <ul>
        {marketList.map((product, index) => (
          <li key={index}>{`${product.name} - ${product.category}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentList;