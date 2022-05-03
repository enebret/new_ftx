/*jshint esversion: 8 */


import './styles/investment.css';
import firstDiv from './util/aboutusimages/first_div.jpg';
import vgDiv from './util/investment/undraw.png';
import pgDiv from './util/investment/external.png';
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

          <div class = 'secondgroup'>
          <div class = 'firstt'>
              <h1>Start with an Investment Plan</h1>
            </div>
            <div class = 'secondd'>
              <h1>What You need to know to get started</h1>
            </div>
            <div class = 'mainn'>
              <p>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests. Our support team will get assistance from AI-powered suggestions.</p>
              <p>FTX's investment strategy is designed to deliver a well-balanced and globally diversified portfolio that will maximize sustained long-term returns without incurring undue risk. We offer a simple attitude to stock trading with an extraordinary Managed Account Platform that allows users to watch their accounts grow by logging in 24 hours a day. Clients have the ability to view their account anytime but are not required to make any trade accomplishment decisions on their own behalf.</p>
              <p>To reach the target of this strategy, our trading expert have designed multiple investment packages for you to choose from based on your financial needs. You can choose yourself which plan to invest into. But if you have some doubts and hesitate which plan to take, you can consult with our expert trading team.</p>
              <p>Our expert trading team studies the clients’ portfolio, financial history and stability of each investor and before recommending any package to you they look through all the aspects of your account. If you follow the expert advice you for sure get stable profit.</p>
            </div>
            <div class = 'imgg'>
            <img id="tg" src={vgDiv} alt="secondDiv" />
            </div>
          </div>
          {/* third group */}
          <div class = 'thirdgroup'>
            <div class = 'firstcontainer'>
            </div>

            <div class = 'tgpfirstext'>
              <h4>Classic</h4>
            </div>

            <div class = 'firstimg'>
            <img id="fig" src={pgDiv} alt="firsttxPng" />
            </div>
            
            <div class = 'firstamt'>
              <h5>$300 - $9,999K</h5>
            </div>
            
            <div class = 'tgpsecondtext'>
                <ul>
                <li id = 'list'>All contracts are valid for 1 year and 100% guaranteed.</li>
                </ul>
            </div>

            <div class = 'line'>
            </div>
            <div class = 'tgproi'>
            <ul>
                <li id = 'list'>12% ROI</li>
                </ul>
            </div>
            <div class = 'secondline'>
            </div>
               


            <div class = 'tgpdailytrade'>
            <ul>
                <li id = 'list'>Unlimited Daily Trade</li>
                </ul>
            </div>
            <div class = 'thirdline'>
            </div>

            <div class = 'tgpaccountmgt'>
            <ul>
                <li id = 'list'>Personal Account Manager</li>
                </ul>
            </div>

            <div class = 'tgpbutton'>
            <button class = 'gtx'>Invest Now</button>
            </div>

            </div>


          {/* fourth group */}
            <div class = 'fourthgroup'>
          <div class = 'secondcontainer'>
               </div>
   
               <div class = 'tgpfirstext'>
              <h4>Classic</h4>
            </div>

            <div class = 'firstimg'>
            <img id="fig" src={pgDiv} alt="firsttxPng" />
            </div>
            
            <div class = 'firstamt'>
              <h5>$300 - $9,999K</h5>
            </div>
            
            <div class = 'tgpsecondtext'>
                <ul>
                <li id = 'list'>All contracts are valid for 1 year and 100% guaranteed.</li>
                </ul>
            </div>

            <div class = 'line'>
            </div>
            <div class = 'tgproi'>
            <ul>
                <li id = 'list'>12% ROI</li>
                </ul>
            </div>
            <div class = 'secondline'>
            </div>
               

            <div class = 'tgpdailytrade'>
            <ul>
                <li id = 'list'>Unlimited Daily Trade</li>
                </ul>
            </div>
            <div class = 'thirdline'>
            </div>

            <div class = 'tgpaccountmgt'>
            <ul>
                <li id = 'list'>Personal Account Manager</li>
                </ul>
            </div>

            <div class = 'tgpbutton'>
            <button class = 'gtx'>Invest Now</button>
            </div>

   
          </div>

          {/* fifth group */}
          <div class = 'fifthgroup'>
          <div class = 'thirdcontainer'>
               </div>
   
               <div class = 'tgpfirstext'>
              <h4>Classic</h4>
            </div>

            <div class = 'firstimg'>
            <img id="fig" src={pgDiv} alt="firsttxPng" />
            </div>
            
            <div class = 'firstamt'>
              <h5>$300 - $9,999K</h5>
            </div>
            
            <div class = 'tgpsecondtext'>
                <ul>
                <li id = 'list'>All contracts are valid for 1 year and 100% guaranteed.</li>
                </ul>
            </div>

            <div class = 'line'>
            </div>
            <div class = 'tgproi'>
            <ul>
                <li id = 'list'>12% ROI</li>
                </ul>
            </div>
            <div class = 'secondline'>
            </div>
               

            <div class = 'tgpdailytrade'>
            <ul>
                <li id = 'list'>Unlimited Daily Trade</li>
                </ul>
            </div>
            <div class = 'thirdline'>
            </div>

            <div class = 'tgpaccountmgt'>
            <ul>
                <li id = 'list'>Personal Account Manager</li>
                </ul>
            </div>

            <div class = 'tgpbutton'>
            <button class = 'gtx'>Invest Now</button>
            </div>

   
          </div>


          {/* sixth group */}
          <div class = 'sixthgroup'>
          <div class = 'fourthcontainer'>
               </div>
   
               <div class = 'tgpfirstext'>
              <h4>Classic</h4>
            </div>

            <div class = 'firstimg'>
            <img id="fig" src={pgDiv} alt="firsttxPng" />
            </div>
            
            <div class = 'firstamt'>
              <h5>$300 - $9,999K</h5>
            </div>
            
            <div class = 'tgpsecondtext'>
                <ul>
                <li id = 'list'>All contracts are valid for 1 year and 100% guaranteed.</li>
                </ul>
            </div>

            <div class = 'line'>
            </div>
            <div class = 'tgproi'>
            <ul>
                <li id = 'list'>12% ROI</li>
                </ul>
            </div>
            <div class = 'secondline'>
            </div>
               

            <div class = 'tgpdailytrade'>
            <ul>
                <li id = 'list'>Unlimited Daily Trade</li>
                </ul>
            </div>
            <div class = 'thirdline'>
            </div>

            <div class = 'tgpaccountmgt'>
            <ul>
                <li id = 'list'>Personal Account Manager</li>
                </ul>
            </div>

            <div class = 'tgpbutton'>
            <button class = 'gtx'>Invest Now</button>
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

export default Investment;