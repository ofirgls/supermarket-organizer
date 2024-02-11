import React, { useState } from 'react';
import './css/HomePage.css';

const HomePage = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [categories, setCategories] = useState(["fruits", "vegetables", "cheeses", "drinks", "snacks"]);

  const addNewProduct = async () => {
    try {
      if (!categories.includes(productCategory)) {
        setCategories([...categories, productCategory]);
      }

      const response = await fetch('http://localhost:3001/products/addproducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productName,
          category: productCategory,
          color: 'red',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const data = await response.json();
      console.log('Product added successfully:', data);
      
      setProductName('');
      setProductCategory('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className='home_page_container'>
      <div className='wellcome'>
        <h1>Market list organizer</h1>
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
              <label htmlFor='productCategorySelect' style={{ marginBottom: "20px" }}>Product category:</label>
              <br />
              <select
                id='productCategorySelect'
                name='productCategory'
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
                className='select_category'
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
                <label htmlFor='productCategoryInput'>Product category:</label>
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
