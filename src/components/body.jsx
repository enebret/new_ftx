import * as React from 'react';
import { useNavigate } from 'react-router-dom'


function Body () {
  const navigate = useNavigate()

    return (
    
        <div>
    <div class="header">
  <div class ='chania'>
  <button onClick={() => navigate("form")}>
        login
      </button>
  </div>
  <h3>logo</h3>
</div>

<div class="pow">
  <div class="col-3 col-s-3 menu">
 
  </div>

  <div class="">
    <div class='cr'>
    <h1 class="qr">Table data below this but before register button</h1>
    <button id = 'btx' onClick={() => navigate("registration")}>
        Register here
      </button>
    <h3 id="gd">All about ftx in a nutshell</h3>
    </div>
    
  </div>

  <div class="col-3 col-s-12">
  
  </div>
</div>

<div class="footer">
  <p>Resize the browser window to see how the content respond to the resizing.</p>
</div>
    </div>
    )
}

export default Body;