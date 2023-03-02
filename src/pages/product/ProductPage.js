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
      <div className="homeBody">

   
      </div>

      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default ProductPage;
