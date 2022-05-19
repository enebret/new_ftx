import './styles/Dropdown.css';
import { useState, useRef} from 'react';

const colors = {
  Azure: '#0087BD',
  Gray: '#F0F0F0',
};

function Cdd(props) {
   
  const pj = 'You will earn up to 6% commission from the invested funds of your referred members. Any additional investment made by your affiliate will generate. Commission is credited to your account balance instantly, without any delays.';
  const bn = 'All members have an individual referral link. You are able to promote your referral link by placing our banners or text ads on your website, blog or just put the affiliate link in message forum signatures, email signatures or any other places.';
  const yj = 'No, as a standard member, you are not obligated to have an active investment in order to participate in affiliate program and earning commissions. However, as a standard member, you will earn 6% commission.';
  const pt = 'No, it’s not an obligation to have an active deposit in order to become our regional representative. All you have to do is willing to promote TradeMax LTD in the best of your abilities. You will earn 6% commission for every investment making by your referrals';

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
    const mkoggleF = () => {
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
        }}>  <span id = 'spw'>How Affiliate Program Works?</span>
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
        }}> <span id = 'spw'>How can I promote my referral link?</span>
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
        }}> <span id = 'spw'>Should I have an active investment to participate in the Referral program?</span>
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
          mkoggleF();
        }}> <span id = 'spw'>Should I have an active investment to participate in the Representatives program?</span>
        </div>

        <div class = 'texxt' ref={pox}>  
          <p>{yj}</p>
       </div>



{/* ground bar */}





       
      </div>
      
    )
  };

  export default Cdd;