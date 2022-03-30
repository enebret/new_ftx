/*jshint esversion: 8 */

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Btc from './util/getBtc.js';

import Xrp from './util/getXrp.js';

import Ada from './util/getAda.js';

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
               <button id = 'cbr' onClick={() => navigate("form")}>Login</button>
              </div>
              <h3>logo</h3>
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
        <button  id = 'tbr' onClick={() => navigate("registration")}>
                 Register here
                        </button>
       
         <div class='cr'>
           <h2 class="qr">Table data below this but before register button</h2>
                 <h3 id="gd">All about ftx in a nutshell</h3>
           </div>
           
         

      <div class="footer">
           <p>Resize the browser window to see how the content respond to the resizing.</p>
      </div>
</div>
    )
}

export default Body;