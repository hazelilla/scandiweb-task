import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';


function Header(props) {

  const { to } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div>

      <header className="header">
 
        <div className="title">
          <p>{props.title}</p>
        </div>
        
        <div  className="buttons">
          <button className="primaryButton" onClick={handleClick}>{props.primaryButton}</button>
          <button className="redButton">{props.secondaryButton}</button>
        </div>
      
      </header>

    </div>
  );
}

export default Header;
