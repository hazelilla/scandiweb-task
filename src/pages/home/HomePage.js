import React, { useState } from 'react';
import './HomePage.css';
import Checkbox from '../../components/checkbox/Checkbox';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';


function HomePage() {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/add-product');
  };

  return (
    <div className="home">

      {/* Header */}
      <header className="header">
 
        <div className="title">
          <p>Product List</p>
        </div>
        
        <div  className="buttons">
          <button className="primaryButton" onClick={handleClick}>ADD</button>
          <button className="redButton">MASS DELETE</button>
        </div>
      
      </header>

      {/* Body */}
      <div className="homeBody">

        <Checkbox sku="JVC200123" name="Acme DISC" price="1.00" description="Size: 700MB"/>
        <Checkbox sku="GGWP0007" name="War and Peace" price="20.00" description="Weight: 2KG"/>
        <Checkbox sku="TR120555" name="Chair" price="40.00" description="Dimensions: 24 x 45 x 15"/>
        <Checkbox sku="GGWP0007" name="War and Peace" price="20.00" description="Weight: 2KG"/>
        <Checkbox sku="TR120555" name="Chair" price="40.00" description="Dimensions: 24 x 45 x 15"/>
        <Checkbox sku="GGWP0007" name="War and Peace" price="20.00" description="Weight: 2KG"/>
        <Checkbox sku="TR120555" name="Chair" price="40.00" description="Dimensions: 24 x 45 x 15"/>
        <Checkbox sku="GGWP0007" name="War and Peace" price="20.00" description="Weight: 2KG"/>
        <Checkbox sku="TR120555" name="Chair" price="40.00" description="Dimensions: 24 x 45 x 15"/>

      </div>

      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default HomePage;
