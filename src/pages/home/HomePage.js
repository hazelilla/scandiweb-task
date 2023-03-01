import React, { useState } from 'react';
import './HomePage.css';


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

      <div className="homeBody">

        {/* Chair */}
        <div className="box">
          <div className="boxElements">

          <input className="checkbox" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>

          <p className="informations">
            TR120555
          </p>
          <p className="informations">
            Chair
          </p>
          <p className="informations">
            40.00$
          </p>
          <p className="informations">
            Dimensions: 24 x 45 x 15
          </p>

          </div>
        </div>  

        {/* Disc */}
        <div className="box">
          <div className="boxElements">

          <input className="checkbox" type="checkbox"/>

          <p className="informations">
            JVC200123
          </p>
          <p className="informations">
            Acme DISC
          </p>
          <p className="informations">
            1.00$
          </p>
          <p className="informations">
            Size: 700 MB
          </p>

          </div>
        </div>  

        {/* Book */}
        <div className="box">
          <div className="boxElements">

          <input className="checkbox" type="checkbox"/>

          <p className="informations">
            GGWP0007
          </p>
          <p className="informations">
            War and Peace
          </p>
          <p className="informations">
            20.00$
          </p>
          <p className="informations">
            Weight: 2KG
          </p>

          </div>
        </div>  

        {/* Book */}
        <div className="box">
          <div className="boxElements">

          <input className="checkbox" type="checkbox"/>

          <p className="informations">
            GGWP0007
          </p>
          <p className="informations">
            War and Peace
          </p>
          <p className="informations">
            20.00$
          </p>
          <p className="informations">
            Weight: 2KG
          </p>

          </div>
        </div>  

      </div>

      <footer className="homeFooter">
        <p>Scandiweb Test assignment</p>
      </footer>
      
    </div>
  );
}

export default HomePage;
