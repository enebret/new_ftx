import './styles/Dropdown.css';
import { useState, useRef} from 'react';



function Textcomponent(props) {
    const lk = props.tx;


    return (
      <div>
        <p id = 'fqtext'>{lk}</p>
      </div>
      
    )
  };

  export default Textcomponent;