/*jshint esversion: 8 */

import './styles/platform.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import firstDiv from './util/aboutusimages/first_div.jpg';
import secondDiv from './util/aboutusimages/second_div.jpg';
import firstPng from './util/aboutusimages/first_png.png';
import fourthDiv from './util/aboutusimages/fourth_div.jpg';
import qOption from './util/aboutusimages/q_option.png';


function Platform () {
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

          <div class = 'stx'>
            <div class = 'fext'>
              <h1 id = 'fextt'>Discover Smart Investing</h1>
            </div>
            <div class = 'dext'>
              <h1><span class="text-success">With the FTX Limited.</span></h1>
            </div>
            <div class = 'mext'>
              <p>The FTX Limited trading platform combines simplicity with sophistication to connect you to the world’s most volatile financial markets. Our dashboard display delivers one-click order execution and is equipped with the latest trading tools. Your trading is backed up by live charts and real-time data feeds, as well as trading signals and the latest market news and analysis.</p>
            </div>
            <div class = 'icons'></div>
          </div>

          <div class = 'thx'>
           <div class = 'rst'>
           <h1 id = 'rstt'>Economic Calender</h1>
           </div>
           <div class = 'sttc'>
             <p>Create a personal investment schedule and prepare for market volatility around key economic events, news and major decisions. The economic calendar is continually updated and events are rated by importance and relevance.</p>
             
           </div>
           <div class = 'imc'>
           <img id="xfd" src={secondDiv} alt="secondDiv" />
           </div>
          </div>

          <div class = 'ftc'>
            <div class ='fng'>
              <h1 id = 'rstt'>Price Alerts and Analysis</h1>
            </div>
            <div class = 'fmg'>
            <p>Trade Max Limited price alerts give you the freedom to step back from the markets until they meet your requirements. Set the rate at which you want to enter the markets and receive immediate notification when it’s time to trade.</p>
            </div>
            <div class = 'ftg'>
            <img id="xfg" src={firstPng} alt="firstPng" />
            </div>
          </div>

          <div class = 'ftq'>
            <div class = 'fch'>  
              <h2 id = 'rstt'>Risk Management</h2>
            </div>
            <div class = 'fcxt'>
              <p>The automatic stop loss, take profit and order entry tools allow you to maximise your profit potential while reducing your risk of loss. The ‘set and forget’ tools will run in the background, relieving you from the need to monitor open trades.</p>
            </div>
            <div class = 'fimg'>
            <img id="fvx" src={fourthDiv} alt="fourth_div" />
            </div>
          </div>

          <div class = 'stq'>
            <div class = 'sgg'>
              <h1>No Experience Trading, Can I Be A Member</h1>
            </div>
            <div class = 'smain'>
              <p>Everyone has to start somewhere, and FXT Trading is a great place to begin. Our Team od experts clearly lays out the moves his is making in his model portfolio and why. We back it all up with simple-to-understand analysis. Even if you have yet to establish a brokerage account, following along as a member can help give you insight and understanding of the exciting, and often volatile stock industry.</p>
            </div>
            <div class = 'sig'>
            <img id="qnp" src={qOption} alt="q_option" />
            </div>
          </div>

          <div class = 'svc'>
            <div class = 'sv_text'>
              <h3>Click Here to Get</h3>
            </div>
            <div class = 'sv_button'>
            
            </div>
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

export default Platform;