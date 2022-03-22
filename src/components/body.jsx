/*jshint esversion: 8 */

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Btc from './util/getBtc.js';



function Body () {
  const navigate = useNavigate();
  const [dfx, newDfx] = useState(null);
  //const [rp, newRP] = useState(null);
  
  useEffect(() => {
    setInterval(() => {
      Btc()
    .then(data=>newDfx(data));
    }, 3000);
    
  }, [dfx]);

    return (
     <div>
          <div class="header">
            <div class ='chania'>
               <button onClick={() => navigate("form")}>login</button>
              </div>
              <h3>logo</h3>
            </div>
        <table>
          <thead></thead>
          <tbody>
          <tr>
           <td>data</td>
           <td>price</td>
          </tr>
          <tr>
          <td>bitcoin</td>
          <td>$  {dfx}</td>
          </tr>
          
          
          </tbody>
        </table>
        
       <div class="pow">
         <div class='cr'>
           <h1 class="qr">Table data below this but before register button</h1>
          <button id = 'btx' onClick={() => navigate("registration")}>
                 Register here
                        </button>
                 <h3 id="gd">All about ftx in a nutshell</h3>
           </div>
       </div>

      <div class="footer">
           <p>Resize the browser window to see how the content respond to the resizing.</p>
      </div>
</div>
    )
}

export default Body;