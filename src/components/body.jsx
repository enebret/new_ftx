/*jshint esversion: 8 */
//{/* use this to comment inside jsx*/}
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//import Btc from './util/getBtc.js';
//import Xrp from './util/getXrp.js';
//import Ada from './util/getAda.js';
import Cg from './coingecko/cg.js';
//import Img from './coingecko/img.js';


import logo from './util/logo.JPG';

import usplash from './util/usplash.jpg';

function Body () {
  const navigate = useNavigate();


  const [btc, newBtc] = useState(null);
  const [eth, newEth] = useState(null);
  const [rp, newRp] = useState(null);
  //marketcap
  const [mbtc, newMBtc] = useState(null);
  const [meth, newMEth] = useState(null);
  const [mrp, newMRp] = useState(null);
  
  //vol
  const [vbtc, newVBtc] = useState(null);
  const [veth, newVEth] = useState(null);
  const [vrp, newVRp] = useState(null);

  //%change
  const [cbtc, newCBtc] = useState(null);
  const [ceth, newCEth] = useState(null);
  const [crp, newCRp] = useState(null);

  useEffect(() => {
   setInterval(() => {
    (async()=>{
      let main_object = await Cg();
      let plain_btc = main_object.data[0].usd;
      let plain_eth = main_object.data[1].usd;
      let plain_rp = main_object.data[2].usd; 

      //marketcap
      let btc_market_cap = main_object.data[0].market_cap;
      let eth_market_cap = main_object.data[1].market_cap;
      let rp_market_cap = main_object.data[2].market_cap;

      //market vol
      let btc_vol = main_object.data[0].vol;
      let eth_vol = main_object.data[1].vol;
      let rp_vol = main_object.data[2].vol;

      //24hr change
      let btc_change = main_object.convert[0];
      let eth_change = main_object.convert[1];
      let rp_change = main_object.convert[2];

      //%

      newBtc(plain_btc);
      newEth(plain_eth);
      newRp(plain_rp);
      //
      newMBtc(btc_market_cap);
      newMEth(eth_market_cap);
      newMRp(rp_market_cap);

      //
      newVBtc(btc_vol);
      newVEth(eth_vol);
      newVRp(rp_vol);

      //
      newCBtc(btc_change);
      newCEth(eth_change);
      newCRp(rp_change);

    })();
   }, 5000);
  }, [btc,eth,rp, cbtc,ceth,crp]);

  
    return (
     <div class='main'>
          <div class="header">
            
            <div class ='nav'>
               <nav>
                 <img id="lg" src={logo} alt="logo" />
                 <a href="/html/">HOME</a>
                 <a href="/html/">COMPANY</a>
                 <a href="/html/">INVESTMENT</a>
                 <a href="/html/">FAQ</a>
                 <a href="/html/">PLATFORM</a>
                 <a href="/html/">PARTNERSHIP</a>
                 <a href="/html/">CONTACT US</a>
                 <button id = 'login-button' onClick={() => navigate("form")}>Login</button>
               </nav>
              </div>
            </div>
        <div class='tb'>
        <table>
          <thead>
          <tr>
            <th>Logo</th>
           <th>Coin Asset</th>
           <th>Price</th>
           <th>Market Cap</th>
           <th>Volume</th>
           <th>24hr%</th>
           
          </tr>
          </thead>
          <tbody>
         
          <tr>
          <td><img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' alt='td' width="40"></img></td>
          <td id = 'ft'>Bitcoin</td>
          <td>{btc}</td>
          <td>{mbtc}</td>
          <td>{vbtc}</td>
          <td>{cbtc}</td>
          </tr>
          
          <tr>
          <td><img src='https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880' alt='td' width="40"></img></td>
          <td id = 'ft'>Ethereum</td>
          <td>{eth}</td>
          <td>{meth}</td>
          <td>{veth}</td>
          <td>{ceth}</td>
          </tr>
          
          <tr>
          <td><img src='https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731' alt='td' width="40"></img></td>
          <td id = 'ft'>Ripple</td>
          <td>{rp}</td>
          <td>{mrp}</td>
          <td>{vrp}</td>
          <td>{crp}</td>
          </tr>

          </tbody>
        </table>
        </div>
        <div class= 'mid_bg_img'>
        <img id="up" src={usplash} alt="unsplash" />
        
        {/* stroke image located here with id */}
          <div class= 'capture_write_up'>
            <h2>Automate Cryptocurrency trading, forecasting and hedging with our Simple
            & flexible platform.
            </h2>
            <p>Our team of experienced traders does the research and trading for all ours members with our winning business models to skyroket earnings.</p>
          </div>
        </div>
        <button  id = 'register-button' onClick={() => navigate("registration")}>
                 Get Started Today
                        </button>
       
        <div class = 'mid_div'>
           <div class = 'first_ad'>
             {/*svg img*/}
             <h1>Trading made easy with us</h1>
             <p>With us trading has been made easy. Choose from 250+ financial instruments with a trusted, award-winning broker.</p>
           </div>
           <div class = 'second_ad'>
             {/*svg img*/}
             <h2>Gold</h2>
             <p>We offer a wide range of gold stock trading. Based on our business model we ensure and guarantee returns on every trade</p>
           </div>
           <div class = 'third_ad'>
              {/*svg img*/}
             <h2>Cryptocurrency</h2>
             <p>We also trade on other Cryptocurrencies to help increase our clients profit margin.</p>
           </div>
           <div class = 'fourth_ad'>
              {/*svg img*/}
             <h3>Cannabis</h3>
             <p>TradeMax LTD has turned cannabis stock trading into a very comfortable, speedy, easy, safe, and relatively risk free process</p>
           </div>
           <div class = 'fifth_ad'>
             {/*svg img*/}
             <h3>Forex</h3>
             <p>With our experience in trading, we have been able to build trust with over 4k clients all over the world, as we do the tasking job for you.</p>
           </div>
           <div class = 'sixth_ad'>
             {/*svg img*/}
             <h3>Stock Bond</h3>
             <p>Invest in Stock and Bonds, the safest and widely accepted investment platform.</p>
           </div>
        </div>
        <div class = 'mid_div_two'>
          <div class = 'security_reliability'></div>
          <div class = 'laptop_image'>
            
          </div>
        </div>
      <div class="footer">
           <p>FTX cloud mining is a fully registered company.All rights reserved.</p>
      </div>
</div>
    )
}

export default Body;