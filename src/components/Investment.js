/*jshint esversion: 8 */


import './styles/investment.css';
import firstDiv from './util/aboutusimages/first_div.jpg';
import vgDiv from './util/investment/undraw.png';
import './styles/about_us.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';

function Investment () {
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
              <h2>Investment Plans</h2>
            </div>
            </div>

          <div class = 'svc'>
          <div class = 'ft'>
              <h1>Start with an Investment Plan</h1>
            </div>
            <div class = 'bt'>
              <h1>What You need to know to get started</h1>
            </div>
            <div class = 'mt'>
              <p>The FTX Limited trading platform combines simplicity with sophistication to connect you to the world’s most volatile financial markets. Our dashboard display delivers one-click order execution and is equipped with the latest trading tools. Your trading is backed up by live charts and real-time data feeds, as well as trading signals and the latest market news and analysis.</p>
            </div>
            <div class = 'igt'>
            <img id="tg" src={vgDiv} alt="secondDiv" />
            </div>
          </div>

          <div class = 'third_tier_content'>

          </div>


          <div class = 'seventh_tier_content'>

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

export default Investment;