/*jshint esversion: 8 */

import './styles/about_us.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import firstDiv from './util/aboutusimages/first_div.jpg';
import secondDiv from './util/aboutusimages/second_div.jpg';
import firstPng from './util/aboutusimages/first_png.png';
import fourthDiv from './util/aboutusimages/fourth_div.jpg';
import qOption from './util/aboutusimages/q_option.png';


function AboutUs () {
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
              <h2>CFD Trading - <strong>Cryptocurrency</strong></h2>
            </div>

            </div>

          <div class = 'second_tier_content'>
            <div class = 'first_text'>
              <h1>Open Leveraged CFD</h1>
            </div>
            <div class = 'second_text'>
              <h1> Trades on Cryptocurrencies</h1>
            </div>
            <div class = 'main_text'>
              <p>FXT Trading Limited allows you to gain high levels of exposure with relatively small investment sums, using up to x200 leverage. When you open leveraged positions you are basically investing using FXT Trading Limited`s money and can make much higher profits. We strongly recommend that you visit our education center to learn more about how to use leverage effectively.</p>
            </div>
            <div class = 'icons'></div>
          </div>

          <div class = 'third_tier_content'>
           <div class = 'first_ttc'>
           <h1>Who Can Trade Cryptocurrencies?</h1>
           </div>
           <div class = 'second_ttc'>
             <p>Online Cryptocurrency trading is already a highly popular form of investment with millions of traders worldwide. Almost anybody can trade Cryptocurrencies if they are willing to apply the basic principles of risk management. The Arbitrage Compass online Education Center contains all the learning tools and educational resources that you need to begin online Cryptocurrency trading.</p>
             <p>Many of Trade Max Limited top investors signed up as absolute beginners with no experience of the financial markets. They used the Education Center and free Demo Account to master the basics of Cryptocurrency trading. Cryptocurrency traders range from novice investors who trade part time, to expert investors who manage complex personal portfolios on a full time basis. The Trade Max Limited platform gives you the freedom to set your own financial goals and manage your own investments.</p>
           </div>
           <div class = 'img_ttc'>
           <img id="sd" src={secondDiv} alt="secondDiv" />
           </div>
          </div>

          <div class = 'fourth_tier_content'>
            <div class ='ft_heading'>
              <h1>Cryptocurrency Trading</h1>
            </div>
            <div class = 'ft_main'>
            <p>By the end of 2016, more than 700 digital currencies were introduced and co-existed. Bearing that in mind, it came as no surprise that during 2017 the total trading volume of the digital currency market has reached a very high value. This phenomenal sum is even more astonishing when considering the simple fact that this market started only 8 years before. A big advantage of digital currencies is that they are not tied to a specific country or bank, therefore allowing them to be liquid not only during traditional trading hours, but also throughout weekend and holidays, allowing people to trade on them 24/7*.</p>
            </div>
            <div class = 'ft_img'>
            <img id="fg" src={firstPng} alt="firstPng" />
            </div>
          </div>

          <div class = 'fifth_tier_content'>
            <div class = 'fc_heading'>
              <h2>Why You Need To Be A Member</h2>
            </div>
            <div class = 'fc_text'>
              <p>Unless you trade stocks full-time, you likely do not have the time and/or know-how needed to successfully select the right cannabis, gold, forex and cryptocurrency stock and know when to buy or sell for maximum profits. Our member-only model portfolio shows stocks have been handpicked by experienced financial advisor and experienced stock traders. We will continuously monitor the markets and review current and potential investments. Members will have professional insight at their fingertips.</p>
            </div>
            <div class = 'fc_img'>
            <img id="fv" src={fourthDiv} alt="fourth_div" />
            </div>
          </div>

          <div class = 'sixth_tier_content'>
            <div class = 'sc_heading'>
              <h1>No Experience Trading, Can I Be A Member</h1>
            </div>
            <div class = 'sc_main'>
              <p>Everyone has to start somewhere, and FXT Trading is a great place to begin. Our Team od experts clearly lays out the moves his is making in his model portfolio and why. We back it all up with simple-to-understand analysis. Even if you have yet to establish a brokerage account, following along as a member can help give you insight and understanding of the exciting, and often volatile stock industry.</p>
            </div>
            <div class = 'sc_img'>
            <img id="qn" src={qOption} alt="q_option" />
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

export default AboutUs;