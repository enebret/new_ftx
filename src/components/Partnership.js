/*jshint esversion: 8 */

import './styles/partnership.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';

import firstDiv from './util/aboutusimages/first_div.jpg';
import secondDiv from './util/partnershipimages/cryptocurrency.png';
import thirdDiv from './util/partnershipimages/remote.png';
import fourthDiv from './util/partnershipimages/slack.png';
import fifthDiv from './util/partnershipimages/spreadsheet.png';


function Partnership () {
  const navigate = useNavigate();

    return (
    <div>
        <div class = 'main'>
            <div class="header">
            <div class ='nav'>
               <nav>
                 <img id="lg" src={logo} alt="logo" />
                 <a onClick={ () => navigate('/')}>HOME</a>
                 <a onClick={() => navigate('/aboutus')}>COMPANY</a>
                 <a onClick={() => navigate('/investment')}>INVESTMENT</a>
                 <a onClick={() => navigate('/faq')}>FAQ</a>
                 <a onClick={() => navigate('/platform')}>PLATFORM</a>
                 <a onClick={() => navigate('/partnership')}>PARTNERSHIP</a>
                 <a onClick={() => navigate('/contactus')}>CONTACT US</a>
                 <button id = 'login-button' onClick={() => navigate("form")}>Login</button>
               </nav>
              </div>
            </div>
            <div class = 'first_tier_content'>
            <img id="fd" src={firstDiv} alt="firstDiv" />
            <div class = 'firstDivText'>
              <h2>CFD Trading - <strong>Cryptocurrency</strong></h2>
            </div>
            </div>

          <div class = 'second_tier_content'>
          <div class = 'first_text'>
              <h1>Discover Smart Investing</h1>
            </div>
            <div class = 'second_text'>
              <h1>Completely with FTX Trade Limited</h1>
            </div>
            <div class = 'main_text'>
              <p>The FTX Limited trading platform combines simplicity with sophistication to connect you to the world’s most volatile financial markets. Our dashboard display delivers one-click order execution and is equipped with the latest trading tools. Your trading is backed up by live charts and real-time data feeds, as well as trading signals and the latest market news and analysis.</p>
            </div>
            <div class = 'img_stc'>
            <img id="st" src={secondDiv} alt="secondDiv" />
            </div>
          </div>

          <div class = 'third_tier_content'>
          <div class = 'first_ttc'>
           <h1>Optimize your Trading Experience</h1>
           </div>
           <div class = 'second_ttc'>
             <p>FTX trading Limited's platform is flexible enough to meet every trading style and requirement.</p>
           </div>
           
          </div>

          <div class = 'fourth_tier_content'>
          <div class ='ft_heading'>
              <h1>Economic Calendar</h1>
            </div>
            <div class = 'ft_main'>
            <p>Create a personal investment schedule and prepare for market volatility around key economic events, news and major decisions. The economic calendar is continually updated and events are rated by importance and relevance.</p>
            </div>
            <div class = 'ft_img'>
            <img id="fg" src={thirdDiv} alt="firstPng" />
            </div>
          </div>

          <div class = 'fifth_tier_content'>
          <div class = 'fc_heading'>
              <h2>Price Alerts and Analysis</h2>
            </div>
            <div class = 'fc_text'>
              <p>FTX trading Limited's price alerts give you the freedom to step back from the markets until they meet your requirements. Set the rate at which you want to enter the markets and receive immediate notification when it’s time to trade.</p>
            </div>
            <div class = 'fc_img'>
            <img id="fv" src={fourthDiv} alt="fourth_div" />
            </div>
          </div>

          <div class = 'sixth_tier_content'>
          <div class = 'sc_heading'>
              <h1>Risk Management</h1>
            </div>
            <div class = 'sc_main'>
              <p>The automatic stop loss, take profit and order entry tools allow you to maximise your profit potential while reducing your risk of loss. The ‘set and forget’ tools will run in the background, relieving you from the need to monitor open trades.</p>
            </div>
            <div class = 'sc_img'>
            <img id="qn" src={fifthDiv} alt="q_option" />
            </div>
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

export default Partnership;