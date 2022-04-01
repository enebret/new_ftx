/*jshint esversion: 8 */

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//import Btc from './util/getBtc.js';
//import Xrp from './util/getXrp.js';
//import Ada from './util/getAda.js';
import Cg from './coingecko/cg.js';
//import Img from './coingecko/img.js';


import logo from './util/logo.JPG';

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

    })();
   }, 5000);
  }, [btc,eth,rp]);

  
    return (
     <div>
          <div class="header">
            <div class ='chania'>
               <button id = 'login-button' onClick={() => navigate("form")}>Login</button>
              </div>
              <img class="one" src={logo} alt="logo" />
            </div>
        <div class='tb'>
        <table>
          <thead>
          <tr>
            <th>logo</th>
           <th>cryptocurrency</th>
           <th>price</th>
           <th>market cap</th>
           <th>market volume</th>
           
          </tr>
          </thead>
          <tbody>
         
          <tr>
          <td><img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' alt='td' width="40"></img></td>
          <td>bitcoin</td>
          <td>{btc}</td>
          <td>{mbtc}</td>
          <td>{vbtc}</td>
          </tr>
          
          <tr>
          <td><img src='https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880' alt='td' width="40"></img></td>
          <td>ethereum</td>
          <td>{eth}</td>
          <td>{meth}</td>
          <td>{veth}</td>
          </tr>
          
          <tr>
          <td><img src='https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731' alt='td' width="40"></img></td>
          <td>ripple</td>
          <td>{rp}</td>
          <td>{mrp}</td>
          <td>{vrp}</td>
          </tr>

          </tbody>
        </table>
        </div>
        <button  id = 'register-button' onClick={() => navigate("registration")}>
                 Register here
                        </button>
       
         <div class='cr'>
           <h4 class="first-text">GET DOUBLE DIGIT RETURNS ON EVERY INVESTMENT</h4>
                 <h7 id="second-text">WE MAKE TRADING EASY AND RELIABLE</h7>
           </div>
           
         

      <div class="footer">
           <p>FTX cloud mining is a fully registered company.All rights reserved.</p>
      </div>
</div>
    )
}

export default Body;