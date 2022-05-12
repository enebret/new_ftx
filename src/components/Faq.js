/*jshint esversion: 8 */


import firstDiv from './util/aboutusimages/first_div.jpg';
import './styles/faq.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import Dropdown from './Dropdown.js';



function Faq () {
  const navigate = useNavigate();
  const pj = 'TradeMax LTD is a managed stock trading platform with user friendly interface and attractive offer, that aids client invest with minimal or no risk.';
  const bn = 'We trade on gold, cannabis, forex and bitcoin.';
  const yj = 'No. you are allowed to create only one account. For special situations please contact our Customer Support.';
  const gt = {
    kj: '0990'
  }


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
          <Dropdown tx = {pj} />
          </div>

          <div class = 'accountquestions'>

          </div>

          <div class = 'investmentquestions'>

          </div>

          <div class = 'withdrawalquestions'>

          </div>
          <div class = 'affiliatequestions'>

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