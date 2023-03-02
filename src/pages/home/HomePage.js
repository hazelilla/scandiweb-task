import React, { useState } from 'react';
import './HomePage.css';
import '../../components/checkbox/Checkbox';
import Checkbox from '../../components/checkbox/Checkbox';


function HomePage() {

  const [isChecked, setIsChecked] = useState(false);
  
  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="home">

      {/* Header */}
      <header className="homeHeader">
 
        <div className="title">
          <p>Product List</p>
        </div>
        
        <div  className="buttons">
          <button className="primaryButton">ADD</button>
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

      <footer className="homeFooter">
        <p>Scandiweb Test assignment</p>
      </footer>

    </div>
  );
}

export default HomePage;
