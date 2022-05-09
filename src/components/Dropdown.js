import './styles/Dropdown.css';
import { useState, useRef} from 'react';

const colors = {
  Azure: '#0087BD',
  Gray: '#F0F0F0',
};

function Dropdown(props) {
    const lk = props.tx;

    const [isActive, setIsActive] = useState(false);
    const [toggle, setToggle] = useState(false);
    const box = useRef();

    const handleClick = () => {
      // 👇️ toggle
      setIsActive(current => !current);
      
      
      // 👇️ or set to true
      // setIsActive(true);
    };

    const toggleF = () => {
      if(box.current.style.display !== 'none'){
        box.current.style.display = 'none';
      }else {
        box.current.style.display = 'block';
      }
      
    };

    return (
      <div class = 'qr'>
          <div class = 'dd'  style={{
          backgroundColor: isActive ? '#0087BD' : '',
          
        }}
        onClick={() => {
          handleClick();
          toggleF();
        }}>
            
        </div>
       <div class = 'texxt' >
          <p ref={box}>{lk}</p>
       </div>
       
      </div>
      
    )
  };

  export default Dropdown;