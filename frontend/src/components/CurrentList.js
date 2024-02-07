import React, { useState, useEffect } from 'react';
import './css/CurrentList.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../store/marketSlice';

const CurrentList = () => {
  const marketList = useSelector((state) => state.market.marketList);
  const categories = [...new Set(marketList.map((product) => product.category))];
  const [clickedProducts, setClickedProducts] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const initialClickedProducts = {};
    marketList.forEach(product => {
      initialClickedProducts[product.id] = product.color || 'red'; 
    });
    setClickedProducts(initialClickedProducts);
  }, [marketList]); 

  const toggleColor = (productId) => {
    const updatedClickedProducts = {
      ...clickedProducts,
      [productId]: clickedProducts[productId] === 'red' ? 'green' : 'red',
    };
    setClickedProducts(updatedClickedProducts);
    const color = updatedClickedProducts[productId];
    dispatch(changeColor({ productId, color }));
  };

  return (
    <div className='list_container'>
      <h2>Current List:</h2>
      <ul className='category_list'>
        {categories.map((category, index) => (
          <li key={index} className='singel_category'>
            <h2>{category}:</h2>
            <ul className='products'>
              {marketList.filter((product) => product.category === category).map((product, subIndex) => (
                <li key={subIndex}>
                  <button
                    className={`buy ${clickedProducts[product.id]}`}
                    onClick={() => toggleColor(product.id)}
                  >
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentList;
