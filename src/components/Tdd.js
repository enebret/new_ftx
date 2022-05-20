import './styles/Dropdown.css';
import { useState, useRef} from 'react';

const colors = {
  Azure: '#0087BD',
  Gray: '#F0F0F0',
};

function Tdd() {
    
  const mystyle = {
    cursor: 'pointer',
    textDecoration: 'underline',
    margin: '0px',
    color: 'black'
  };


///

  const pj = 'To make investments you should register with us, create an account and then you can make your deposit. All the investments are made in your personal account after login.';
  //const bn = ''; use of bold elements
  const tj = 'You can start investing with as low as 500 USD.';
  const tg = 'Transactions will be credited on your account after payment have been confirmed. This might take upto 30 minutes for payment to reflect in your account';
  const yj = 'Yes, all initial investments are guaranteed to be paid back to the investor when ever he/she wants to withdraw|terminate their contract.';
  const vn = 'Your interest is calculated every business day based on the \return\'s of your trade.';
  const xj = 'Yes, but note that all the transactions are handled separately.';
  const xn = 'There are certain risks in any investment programs. However, there are some simple ways that can help you to reduce risks of losing your money. First, set a certain financial goal and deposit such sum of money that you can afford. Remember that our expert trading team is always ready to help you.';
  const xq = 'Our expert team of TradeMax LTD are managing your funds.';



    
    //hooks for the dropdowns
    const [isActive, setIsActive] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [le, setLe] = useState(false);
    const [ke, ketLe] = useState(false);
    const [je, jetLe] = useState(false);
    const [be, betLe] = useState(false);
    const [ye, yetLe] = useState(false);
    const [ze, zetLe] = useState(false);
    const [xe, xetLe] = useState(false);

    

    const box = useRef();
    const nox = useRef();
    const lox = useRef();
    const mox = useRef();
    const pox = useRef();
    const vox = useRef();
    const qox = useRef();
    const xox = useRef();
    const zox = useRef();



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
  //////////////////////////////////////////
    //FIRST DIV
    //function for first div color change onclick
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

  //////////////////////////////////////////
    //FIRST DIV
    //function for first div color change onclick
    const yandleClick = () => {
      // 👇️ toggle
      ketLe(current => !current);
      
    };
    //function for child element slidedown
    const yoggleF = () => {
      if(mox.current.style.maxHeight !== '100px'){
        mox.current.style.maxHeight = '100px';
      }else {
        mox.current.style.maxHeight = '0px';
      }
      
    };


 //////////////////////////////////////////
    //FIRST DIV
    //function for first div color change onclick
    const xandleClick = () => {
      // 👇️ toggle
      jetLe(current => !current);
      
    };
    //function for child element slidedown
    const xoggleF = () => {
      if(pox.current.style.maxHeight !== '100px'){
        pox.current.style.maxHeight = '100px';
      }else {
        pox.current.style.maxHeight = '0px';
      }
      
    };


 //////////////////////////////////////////
    //FIRST DIV
    //function for first div color change onclick
    const bandleClick = () => {
      // 👇️ toggle
      betLe(current => !current);
      
    };
    //function for child element slidedown
    const boggleF = () => {
      if(vox.current.style.maxHeight !== '100px'){
        vox.current.style.maxHeight = '100px';
      }else {
        vox.current.style.maxHeight = '0px';
      }
      
    };



    //////////////////////////////////////////
    //FIRST DIV
    //function for first div color change onclick
    const landleClick = () => {
      // 👇️ toggle
      yetLe(current => !current);
      
    };

    //function for child element slidedown
    const loggleF = () => {
      if(qox.current.style.maxHeight !== '100px'){
        qox.current.style.maxHeight = '100px';
      }else {
        qox.current.style.maxHeight = '0px';
      }
      
    };

  //////////////////////////////////////////
    //FIRST DIV
    //function for first div color change onclick
    const mandleClick = () => {
      // 👇️ toggle
      zetLe(current => !current);
      
    };

    //function for child element slidedown
    const moggleF = () => {
      if(xox.current.style.maxHeight !== '100px'){
        xox.current.style.maxHeight = '100px';
      }else {
        xox.current.style.maxHeight = '0px';
      }
      
    };


      //////////////////////////////////////////
    //FIRST DIV
    //function for first div color change onclick
    const fandleClick = () => {
      // 👇️ toggle
      xetLe(current => !current);
      
    };

    //function for child element slidedown
    const foggleF = () => {
      if(zox.current.style.maxHeight !== '100px'){
        zox.current.style.maxHeight = '100px';
      }else {
        zox.current.style.maxHeight = '0px';
      }
      
    };


















    return (
      <div class = 'qr'>

        {/* main div */}



        {/* firt bar */}

          <div class = 'kd'  style={{
          backgroundColor: isActive ? '#0087BD' : '',
        }}
        onClick={() => {
          handleClick();
          toggleF();
        }}>  <span id = 'spw'>What is the process of investing?</span>
        </div>

       <div class = 'texxt' ref={box}>  
          <p>{pj}</p>
       </div>

       {/* comment here */}
       {/* second bar */}

        <div  class = 'kd'     style={{
          backgroundColor: toggle ? '#0087BD' : '',
        }}
        onClick={() => {
          kandleClick();
          noggleF();
        }}> <span id = 'spw'>What Currencies can I use to invest?</span>
        </div>

        <div class = 'texxt' ref={nox}>  
          <p>We accept <strong>Bitcoin,</strong> <strong>Dollars,</strong> <strong>Euro</strong> and <strong>Pounds.</strong></p>
       </div>

       {/* comment here */}
       {/* third bar */}

       <div  class = 'kd'     style={{
          backgroundColor: le ? '#0087BD' : '',
        }}
        onClick={() => {
          zandleClick();
          zoggleF();

        }}> <span id = 'spw'>How much is the minimum allowed amount to start investing?</span>
        </div>
        <div class = 'texxt' ref={lox}>  
          <p>{tj}</p>
       </div>

        {/* comment here */}
        {/* fourth bar */}


       <div  class = 'kd'     style={{
          backgroundColor: ke ? '#0087BD' : '',
        }}
        onClick={() => {
          yandleClick();
          yoggleF();
        }}> <span id = 'spw'>How fast are my deposits added to my account?</span>
        </div>
        <div class = 'texxt' ref={mox}>  
          <p>{tg}</p>
       </div>

         {/* comment here */}
         {/* fifth bar */}


       <div  class = 'kd'     style={{
          backgroundColor: je ? '#0087BD' : '',
        }}
        onClick={() => {
          xandleClick();
          xoggleF();
        }}> <span id = 'spw'>Is our initial investment guaranteed?</span>
        </div>
        <div class = 'texxt' ref={pox}>  
          <p>{yj}</p>
       </div>

            {/* comment here */}
         {/* sixth bar */}


       <div  class = 'kd'     style={{
          backgroundColor: be ? '#0087BD' : '',
        }}
        onClick={() => {
          bandleClick();
          boggleF();
          
        }}> <span id = 'spw'>How is the interest calculated?</span>
        </div>
        <div class = 'texxt' ref={vox}>  
          <p>{vn}</p>
       </div>

            {/* comment here */}
         {/* seventh bar */}


       <div  class = 'kd'     style={{
          backgroundColor: ye ? '#0087BD' : '',
        }}
        onClick={() => {
          landleClick();
          loggleF();
        }}> <span id = 'spw'>How to check my account balance?</span>
        </div>
        <div class = 'texxt' ref={qox}>  
          <p>{xj}</p>
       </div>

       {/* comment here */}
         {/* eigth bar */}


         <div  class = 'kd'     style={{
          backgroundColor: ze ? '#0087BD' : '',
        }}
        onClick={() => {
          mandleClick();
          moggleF();
        }}> <span id = 'spw'>Are there risks to lose money?</span>
        </div>
        <div class = 'texxt' ref={xox}>  
          <p>{xn}</p>
       </div>


        {/* comment here */}
         {/* eigth bar */}


         <div  class = 'kd'     style={{
          backgroundColor: xe ? '#0087BD' : '',
        }}
        onClick={() => {
          fandleClick();
          foggleF();
        }}> <span id = 'spw'>Who manages the funds?</span>
        </div>
        <div class = 'texxt' ref={zox}>  
          <p>{xq}</p>
       </div>










       
      </div>
      
    )
  };

  export default Tdd;