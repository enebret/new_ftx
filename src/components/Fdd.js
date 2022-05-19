import './styles/Dropdown.css';
import { useState, useRef} from 'react';

const colors = {
  Azure: '#0087BD',
  Gray: '#F0F0F0',
};

function Fdd(props) {
   
  const pj = 'You can withdraw your money in your personal account in the Withdraw Section.';
  const bn = 'Withdrawal requests for sums up to $500.00 will be paid in less than 2 hours. Withdrawal requests with more than $500 of amount will take up to 24 hours to be processed.';
  const yj = 'No, there are no fees for withdrawing funds.';
  const pk = 'Yes, a minimum amount you can request for a withdrawal is $1 US Dollar.';


    //hooks for the dropdowns
    const [isActive, setIsActive] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [le, setLe] = useState(false);
    const [ke, ketLe] = useState(false);



    const box = useRef();
    const nox = useRef();
    const lox = useRef();
    const pox = useRef();



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

        //SECOND DIV
    //function for second div color change onclick
    const zandleClick = () => {
      // 👇️ toggle
      setLe(current => !current);
      
    };
     //function for child element slidedown
    const zoggleF = () => {
      if(lox.current.style.maxHeight !== '100px'){
        lox.current.style.maxHeight = '100px';
      }else {
        lox.current.style.maxHeight = '0px';
      }
      
    };


//////////////////////////////////////////////////////////////

        //SECOND DIV
    //function for second div color change onclick
    const mandleClick = () => {
      // 👇️ toggle
      ketLe(current => !current);
      
    };
     //function for child element slidedown
    const moggleF = () => {
      if(pox.current.style.maxHeight !== '100px'){
        pox.current.style.maxHeight = '100px';
      }else {
        pox.current.style.maxHeight = '0px';
      }
      
    };












    return (
      <div class = 'qr'>
        {/* first bar */}
          <div class = 'kd'  style={{
          backgroundColor: isActive ? '#0087BD' : '',
        }}
        onClick={() => {
          handleClick();
          toggleF();
        }}>  <span id = 'spw'>How to withdraw funds?</span>
        </div>

       <div class = 'texxt' ref={box}>  
          <p>{pj}</p>
       </div>
       
       {/* second bar */}
        <div  class = 'kd'     style={{
          backgroundColor: toggle ? '#0087BD' : '',
        }}
        onClick={() => {
          kandleClick();
          noggleF();
        }}> <span id = 'spw'>How fast is my withdrawal processed?</span>
        </div>

        <div class = 'texxt' ref={nox}>  
          <p>{bn}</p>
       </div>

       {/* third bar */}
       <div  class = 'kd'     style={{
          backgroundColor: le ? '#0087BD' : '',
        }}
        onClick={() => {
          zandleClick();
          zoggleF();
        }}> <span id = 'spw'>Are there any fees to make withdrawal?</span>
        </div>

        <div class = 'texxt' ref={lox}>  
          <p>{yj}</p>
       </div>

           {/* fourth bar */}
       <div  class = 'kd'     style={{
          backgroundColor: ke ? '#0087BD' : '',
        }}
        onClick={() => {
          mandleClick();
          moggleF();
        }}> <span id = 'spw'>Is there a minimum sum for withdrawal?</span>
        </div>

        <div class = 'texxt' ref={pox}>  
          <p>{pk}</p>
       </div>



{/* ground bar */}





       
      </div>
      
    )
  };

  export default Fdd;