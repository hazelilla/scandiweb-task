import React, { useState } from 'react';
import './Checkbox.css';


function Checkbox(props) {

  const [isChecked, setIsChecked] = useState(false);
  
  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div>

        {/* Chair */}
        <div className="box">
          <div className="boxElements">

            <input className="checkbox" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>

            <p className="informations"> {props.sku} </p>
            <p className="informations"> {props.name} </p>
            <p className="informations"> {props.price}$ </p>
            <p className="informations"> {props.description} </p>

          </div>
        </div>  

    </div>
  );
}

export default Checkbox;
