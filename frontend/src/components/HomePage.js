import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/marketSlice';
import './css/HomePage.css';

const HomePage = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [categories, setCategories] = useState(["fruits", "vegetables", "cheeses", "drinks", "snacks"]);

  const dispatch = useDispatch();

  const addNewProduct = () => {
    if (!categories.includes(productCategory)) {
      setCategories([...categories, productCategory]);
    }
    console.log(categories);
    const randomId = Math.floor(Math.random() * 10000000000);
    console.log("productName: ", productName, "productCategory: ", productCategory, "randomId: ", randomId);
    const payload = { name: productName, category: productCategory, id: randomId, color: "red"};
    dispatch(addProduct(payload));
    setProductName('');
    setProductCategory('');
  };

  return (
    <div className='home_page_container'>
      <div className='wellcome'>
        <h1>Welcome to the market list organizer</h1>
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
          {(productCategory === "" && productCategory !== "new category") || categories.includes(productCategory) ? (
            <div>
              <label htmlFor='productCategory' style={{ marginBottom: "20px" }}>Product category:</label>
              <br />
              <select
                id='productCategorySelect'
                name='productCategory'
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
                style={{ marginTop: "20px" }}
              >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
                <option value="new category">new category</option>
              </select>
            </div>
          ) : null}
          {productCategory === "new category" || (!categories.includes(productCategory) && productCategory !== "") ?
            (
              <div>
                <label htmlFor='productCategory'>Product category:</label>
                <input
                  type='text'
                  id='productCategoryInput'
                  name='productCategory'
                  onChange={(e) => setProductCategory(e.target.value)}
                  required
                />
              </div>
            ) : null
          }
          <br />
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