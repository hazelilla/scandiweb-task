import React, { useState } from 'react';
import './ProductPage.css';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

function ProductPage() {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="home">

      {/* Header */}
      <header className="header">
 
        <div className="title">
          <p>Product Add</p>
        </div>
        
        <div  className="buttons">
          <button className="saveButton">SAVE</button>
          <button className="primaryButton" onClick={handleClick}>CANCEL</button>
        </div>
      
      </header>

      {/* Body */}
      <div className="productBody">
        
        <div className="inline">
            <p className="tags">SKU</p>
            <input className="input-style"></input>
        </div>

        <div className="inline">
            <p className="tags">Name</p>
            <input className="input-style"></input>
        </div>

        <div className="inline">
            <p className="tags">Price ($)</p>
            <input className="input-style"></input>
        </div>

        <div className="inline">
            <p>Type Switcher</p>
            <select className="select">
                <option value="">Type Switcher</option>
                <option value="option1">DVD-disc</option>
                <option value="option2">Book</option>
                <option value="option3">Furniture</option>
            </select>
        </div>
        
        
   
      </div>

      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default ProductPage;
