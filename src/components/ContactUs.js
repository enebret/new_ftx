/*jshint esversion: 8 */


import firstDiv from './util/aboutusimages/first_div.jpg';
import './styles/contactus.css';
import './styles/about_us.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';

function ContactUs () {
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

        
          <div class = 'fm'>
              <h1>Contact Form</h1>
            </div>
      

          <div class = 'formclass'>
              <form>
                <div class = 'lb'>
              <label for="fnam">First Name*</label>
                </div>
              <div class = 'tb'> 
              <input type="text" id="fnam" name="firstname" placeholder="Your name.."></input>
              </div>
              
              <div class = 'cb'>
              <label for="fnam">Your Email Address*</label>
                </div>
              <div class = 'db'> 
              <input type="text" id="fdb" name="firstname" placeholder="Your email.."></input>
              </div>


              <div class = 'sb'>
              <label for="fnam">Subject*</label>
                </div>
              <div class = 'vb'> 
              <input type="text" id="sdb" name="firstname" placeholder="Enter subject.."></input>
              </div>


              <div class = 'mb'>
              <label for="fnam">Message*</label>
                </div>
              <div class = 'xb'> 
              <input type="text" id="mdb" name="firstname" placeholder=".."></input>
              </div>


              <div class = 'btz'>
              <button class = 'btx'>Submit</button>
                </div>


              </form>
          </div>

          <div class = 'fourth_tier_content'>

          </div>

          <div class = 'fifth_tier_content'>

          </div>

          <div class = 'sixth_tier_content'>

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

export default ContactUs;