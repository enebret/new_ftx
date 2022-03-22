import React, {useState, useEffect} from 'react';
import Xrp from './util/getXrp.js';
import Btc from './util/getBtc.js';
function Table () {
    const [btx, newBtx] = useState(null);
    //const [th, newTH] = useState(null);
    //const [cd, newCD] = useState(null);
    const [rp, newRP] = useState(null);
    useEffect(()=>{
      async function getApi (){
        try{
          
          newBtx(Btc);
          //newTH(dt.data.tether.usd);
          //newCD(dt.finalAda);
          newRP(Xrp);
        }
        catch (error) {
          console.error(error)
        }; 
      };
      setInterval(()=>{
        getApi()
      }, 7000)
    });
    
    return (
        
      <div>
        <table>
          <tr>
           <td>data</td>
           <td>price</td>
          </tr>
          <tr>
          <td>bitcoin</td>
          <td>NGN{btx}</td>
          </tr>
          
          <tr>
          <td>ripple</td>
           <td>NGN{rp}</td>
          </tr>
        </table>

        </div>
    )
}

export default Table;