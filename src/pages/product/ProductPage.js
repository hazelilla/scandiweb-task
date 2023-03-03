import React, { useState } from 'react';
import './ProductPage.css';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';

function ProductPage() {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
  };

  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const renderInput = () => {
    if (selectedType === "option1") {
      return (
        <div>
            <div className="inline">
                <p className="tags">Size (MB)</p>
                <input className="input-style" />
            </div>
            <p className="description">Please, provide disc space in MB</p>
        </div>
        
      );
    } else if (selectedType === "option2"){
      return (
        <div>
            <div className="inline">
                <p className="tags">Weight (KG)</p>
                <input className="input-style"></input>
            </div>
            <p className="description">Please, provide weight in KG</p>
        </div>
        
      );
    } else if (selectedType === "option3"){
        return (
            <div>
                <div className="inline">
                    <p className="tags">Height (CM)</p>
                    <input className="input-style"></input>
                </div>
                <div className="inline">
                    <p className="tags">Width (CM)</p>
                    <input className="input-style"></input>
                </div>
                <div className="inline">
                    <p className="tags">Length (CM)</p>
                    <input className="input-style"></input>
                </div>

                <p className="description">Please, provide dimensions in HxWxL format</p>
            </div>
        );
    }
  };

  return (
    <div className="home">

      {/* Header */}
      <header className="header">
 
        <div className="title">
          <p>Product Add</p>
        </div>
        
        <div  className="buttons">
          <Button text="SAVE" className="blueButton"/>
          <Button text="CANCEL" className="primaryButton" onClick={handleClick}/>
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
            <select className="select" onChange={handleTypeChange}>
                <option value="">Type Switcher</option>
                <option value="option1">DVD-disc</option>
                <option value="option2">Book</option>
                <option value="option3">Furniture</option>
            </select>
        </div>
        {renderInput()}

      </div>

      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default ProductPage;
