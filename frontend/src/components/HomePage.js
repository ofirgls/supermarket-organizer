import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/marketSlice';
import './css/HomePage.css';

const HomePage = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  

  const dispatch = useDispatch();

  const addNewProduct = () => {
    console.log("productName", { productName }, "productCategory", { productCategory });
    const payload = { name: productName, category: productCategory };
    dispatch(addProduct(payload));
    setProductName('');
    setProductCategory('');
  };

  return (
    <div className='home_page_container'>
      <div className='wellcome'>
        <h1>Wellcome to the market list organizer</h1>
      </div>
      <form className='market_form' onSubmit={(e) => { e.preventDefault(); addNewProduct(); }}>
        <h2>Add your products to the list:</h2>
        <div className='form_inputs'>
          <label htmlFor='productName'>Product name:</label>
          <input
            type='text'
            id='productName'
            name='productName'
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            required
          />
          <br />
          <label htmlFor='productCategory'>Product category:</label>
          <input
            type='text'
            id='productCategory'
            name='productCategory'
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
          />
          <h3>Add the product to the current list</h3>
          <div className='center_button'>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
