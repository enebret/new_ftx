import './styles/Dropdown.css';
import { useState } from 'react';

const colors = {
  Azure: '#0087BD',
  Gray: '#F0F0F0',
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
      <div class = 'qr'>
          <div class = 'dd'  style={{
          backgroundColor: isActive ? '#0087BD' : '',
        }}
        onClick={handleClick}>
            
        </div>
       <div class = 'texxt'>
          <p>we trade on gold, cannabis and bitcoin.</p>
       </div>
       
      </div>
      
    )
  };

  export default Dropdown;