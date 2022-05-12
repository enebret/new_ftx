import './styles/Dropdown.css';
import { useState, useRef} from 'react';

const colors = {
  Azure: '#0087BD',
  Gray: '#F0F0F0',
};

function Sdd(props) {
    const lk = props.tx;
///

  const pj = 'TradeMax LTD is a managed stock trading platform with user friendly interface and attractive offer, that aids client invest with minimal or no risk.';
  const bn = 'We trade on gold, cannabis, forex and bitcoin.';
    
    //hooks for the dropdowns
    const [isActive, setIsActive] = useState(false);
    const [toggle, setToggle] = useState(false);
    const box = useRef();
    const nox = useRef();





    //////////////////////////////////////////
    //FIRST DIV
    //function for first div color change onclick
    const handleClick = () => {
      // 👇️ toggle
      setIsActive(current => !current);
      
    };
    //function for child element slidedown
    const toggleF = () => {
      if(box.current.style.maxHeight !== '100px'){
        box.current.style.maxHeight = '100px';
      }else {
        box.current.style.maxHeight = '0px';
      }
      
    };
/////////////////////////////////////////////////////



    //SECOND DIV
    //function for second div color change onclick
    const kandleClick = () => {
      // 👇️ toggle
      setToggle(current => !current);
      
    };
     //function for child element slidedown
    const noggleF = () => {
      if(nox.current.style.maxHeight !== '100px'){
        nox.current.style.maxHeight = '100px';
      }else {
        nox.current.style.maxHeight = '0px';
      }
      
    };
//////////////////////////////////////////////////////////////

















    return (
      <div class = 'qr'>
        {/* comment here */}
          <div class = 'dd'  style={{
          backgroundColor: isActive ? '#0087BD' : '',
        }}
        onClick={() => {
          handleClick();
          toggleF();
        }}>  
        </div>

       <div class = 'texxt' ref={box}>  
          <p>{pj}</p>
       </div>
       
       {/* comment here */}
        <div  class = 'dd'     style={{
          backgroundColor: toggle ? '#0087BD' : '',
        }}
        onClick={() => {
          kandleClick();
          noggleF();
        }}>
        </div>

        <div class = 'texxt' ref={nox}>  
          <p>{bn}</p>
       </div>

       {/* comment here */}
       <div  class = 'dd'     style={{
          
        }}
        onClick={() => {
          
        }}>
        </div>






       
      </div>
      
    )
  };

  export default Sdd;