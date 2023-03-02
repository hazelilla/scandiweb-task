import React, { useState } from 'react';
import './Header.css';


function Header(props) {

  return (
    <div>

      <header className="header">
 
        <div className="title">
          <p>{props.title}</p>
        </div>
        
        <div  className="buttons">
          <button className="primaryButton">{props.primaryButton}</button>
          <button className="redButton">{props.deleteButton}</button>
        </div>
      
      </header>

    </div>
  );
}

export default Header;
