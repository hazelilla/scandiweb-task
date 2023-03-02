import React, { useState } from 'react';
import './HomePage.css';
import Checkbox from '../../components/checkbox/Checkbox';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


function HomePage() {

  return (
    <div className="home">

      {/* Header */}
      <Header title="Product List" primaryButton="ADD" deleteButton="MASS DELETE"/>

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
