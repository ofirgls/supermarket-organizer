import React, { useState, useEffect } from 'react';
import './css/CurrentList.css';

const CurrentList = () => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/products/getproducts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      const category = [...new Set(jsonData.map((product) => product.category))];
      setCategories(category);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateColor = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3001/products/${productId}/updateColor`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedProduct = await response.json();
      setData(data.map(product => product.id === productId ? updatedProduct : product));
    } catch (error) {
      console.error('Error updating color:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3001/products/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setData(prevData => {
        const newData = prevData.filter(product => product.id !== productId); 
        const remainingCategories = [...new Set(newData.map(product => product.category))];
        setCategories(remainingCategories);
        return newData;
      });
      console.log('Deleted product:', productId);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className='list_container'>
      <h2>Current List:</h2>
      <ul className='category_list'>
        {data && categories.map((category) => {
          const categoryProducts = data.filter((product) => product.category === category);
          if (categoryProducts.length > 0) {
            return (
              <li key={category} className='singel_category'>
                <h2>{category}:</h2>
                <ul className='products'>
                  {categoryProducts.map((product) => (
                    <li key={product.id}>
                      <button
                        className={`buy ${product.color}`}
                        onClick={() => updateColor(product.id)}
                      >
                        {product.name}
                      </button>
                      <button
                        className='remove_product'
                        onClick={() => deleteProduct(product.id)}
                      >
                        remove
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default CurrentList;
