import './styles/Dropdown.css';
import { useState } from 'react';

const colors = {
  Azure: '#151E3D',
  Gray: '#808080',
};

function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      // 👇️ toggle
      setIsActive(current => !current);
  
      // 👇️ or set to true
      // setIsActive(true);
    };

    return (
        <div class = 'dd'  style={{
          backgroundColor: isActive ? '#F0F0F0' : '',
        }}
        onClick={handleClick}>
            
        </div>
    )
  };

  export default Dropdown;