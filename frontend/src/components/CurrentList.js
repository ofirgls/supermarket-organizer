import React from 'react';
import { useSelector } from 'react-redux';

const CurrentList = () => {
  const marketList = useSelector((state) => state.market.marketList);
  const categories = [...new Set(marketList.map((product) => product.category))];

  return (
    <div>
      <h2>Current List:</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <h2>{category}:</h2>
            <ul>
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