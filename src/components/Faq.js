/*jshint esversion: 8 */


import firstDiv from './util/aboutusimages/first_div.jpg';
import './styles/faq.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import Dropdown from './Dropdown.js';
import Sdd from './Sdd.js';
import Tdd from './Tdd.js';
import Fdd from './Fdd.js';
import Cdd from './Cdd.js';
import Boardcomponent from './Boardcomponent.js';


function Faq () {
  const navigate = useNavigate();
  

    return (
    <div>
        <div class = 'main'>
            <div class="header">
            <div class ='nav'>
               <nav>
                 <img id="lg" src={logo} alt="logo" />
                 <a href="#" >HOME</a>
                 <a >COMPANY</a>
                 <a href="#">INVESTMENT</a>
                 <a href="#">FAQ</a>
                 <a href="#">PLATFORM</a>
                 <a href="#">PARTNERSHIP</a>
                 <a href="#">CONTACT US</a>
                 <button id = 'login-button' onClick={() => navigate("form")}>Login</button>
               </nav>
              </div>
            </div>
            <div class = 'first_tier_content'>
            <img id="fd" src={firstDiv} alt="firstDiv" />
            <div class = 'firstDivText'>
              <h2>Frequent Questions</h2>
            </div>
            </div>

          <div class = 'second_tier_content'>
          <Dropdown />
          </div>

          <div class = 'accountquestions'>
          <Sdd />
          </div>

          <div class = 'investmentquestions'>
          <Tdd />
          </div>

          <div class = 'withdrawalquestions'>
          <Fdd />
          </div>
          <div class = 'affiliatequestions'>
          <Cdd />
          </div>

          <div class = 'ffqtc'>

          </div>
          
          <div class = 'board'>
          <Boardcomponent />
          </div>

            <div class = 'main_footer'>
     <div class = 'mid_footer'>
       <div class = 'first_box'>
         <ul id = 'footer'>
           <li id = 'margin'>Our Company</li>
           <li>About Us</li>
           <li>Terms of Use</li>
           <li>Privacy Policy</li>
         </ul>
       </div>
       <div class = 'sec_box'>
       <ul id = 'footer'>
           <li id = 'margin'>Earning Opportunities</li>
           <li>Investment Packages</li>
           <li>Partnership Program</li>
         </ul>
       </div>
       <div class = 'third_box'>
       <ul id = 'footer'>
           <li id = 'margin'>Support</li>
           <li>Contact Us</li>
           <li>Frequently asked questions</li>
           <li>Platform</li>
         </ul>
       </div>
       <div class = 'fourth_box'>
       <ul id = 'footer'>
           <li id = 'margin'>Account Management</li>
           <li>Create Account</li>
           <li>Login</li>
           <li>Forgot Password</li>
         </ul>
       </div>
       <div class = 'fifth_box'>
       <ul id = 'footer'>
           <li id = 'margin'>Contact us</li>
           <li>Address: 4096 N Highland St, Arlington, Tx, USA.</li>
           <li>support@fxt.com</li>
         </ul>

                </div>
            <div class = 'sixth_box'></div>
            </div>
                <div class="footer">
                <p>FTX cloud mining is a fully registered company.All rights reserved.</p>
                </div>
          </div>

            {/*the below div is last div/ function component div*/}
            </div>
              




          
        </div>
    )
}

export default Faq;