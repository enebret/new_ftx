import './styles/Dropdown.css';
import { useState, useRef} from 'react';

const colors = {
  Azure: '#0087BD',
  Gray: '#F0F0F0',
};

function Sdd(props) {
    const lk = props.tx;
///

  const pj = 'It’s not difficult at all. Click on the following button, fill in the registration form and create a new account.';
  const bn = 'Yes. Our website is all fully responsive and functional with Apple/Android phones and tablets.';
  const tj = 'We take all security measures to protect your account and keep it safe from third parties intrusion.';
  //fourth enter as direct text and use span for link
  const yj = 'Enter your account and change your e-mail address and password in “Account Settings” section.';
  const vn = 'Go to Password Reminder section, enter your registration e-mail address and follow the instructions.';
  




    
    //hooks for the dropdowns
    const [isActive, setIsActive] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [le, setLe] = useState(false);
    const [ke, ketLe] = useState(false);
    const [je, jetLe] = useState(false);
    const [be, betLe] = useState(false);
    

    const box = useRef();
    const nox = useRef();
    const lox = useRef();
    const mox = useRef();
    const pox = useRef();
    const vox = useRef();

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













    return (
      <div class = 'qr'>

        {/* main div */}



        {/* firt bar */}

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
       {/* second bar */}

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
       {/* third bar */}

       <div  class = 'dd'     style={{
          backgroundColor: le ? '#0087BD' : '',
        }}
        onClick={() => {
          zandleClick();
          zoggleF();

        }}>
        </div>
        <div class = 'texxt' ref={lox}>  
          <p>{tj}</p>
       </div>

        {/* comment here */}
        {/* fourth bar */}


       <div  class = 'dd'     style={{
          backgroundColor: ke ? '#0087BD' : '',
        }}
        onClick={() => {
          yandleClick();
          yoggleF();
        }}>
        </div>
        <div class = 'texxt' ref={mox}>  
          <p></p>
       </div>

         {/* comment here */}
         {/* fifth bar */}


       <div  class = 'dd'     style={{
          backgroundColor: je ? '#0087BD' : '',
        }}
        onClick={() => {
          xandleClick();
          xoggleF();
        }}>
        </div>
        <div class = 'texxt' ref={pox}>  
          <p>{yj}</p>
       </div>

            {/* comment here */}
         {/* sixth bar */}


       <div  class = 'dd'     style={{
          backgroundColor: be ? '#0087BD' : '',
        }}
        onClick={() => {
          bandleClick();
          boggleF();
        }}>
        </div>
        <div class = 'texxt' ref={vox}>  
          <p>{vn}</p>
       </div>





       
      </div>
      
    )
  };

  export default Sdd;