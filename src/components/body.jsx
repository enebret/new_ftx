/*jshint esversion: 8 */

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Btc from './util/getBtc.js';

import Xrp from './util/getXrp.js';

import Ada from './util/getAda.js';

import logo from './util/logo.JPG';

function Body () {
  const navigate = useNavigate();
  const [dfx, newDfx] = useState(null);
  const [rp, newRP] = useState(null);
  const [cd, newCd] = useState(null);

  /** setInterval(() => {
      Btc()
    .then(data=>newDfx(data));
    }, 3200); */
  useEffect(() => {
   setInterval(() => {
    (async()=>{
      let pg = await Btc();
      let vg = await Xrp();
      let cg = await Ada(); 
      newDfx(pg);
      newRP(vg);
      newCd(cg);
    })();
   }, 5000);
    
  }, [dfx,rp]);

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
           <th>data</th>
           <th>price</th>
          </tr>
          </thead>
          <tbody>
         
          <tr>
          <td>bitcoin</td>
          <td>$  {dfx}</td>
          </tr>
          
          <tr>
          <td>ripple</td>
          <td>$  {rp}</td>
          </tr>
          
          <tr>
          <td>cardano</td>
          <td>$  {cd}</td>
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