/*jshint esversion: 8 */

import './styles/platform.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import firstDiv from './util/aboutusimages/first_div.jpg';
import secondDiv from './util/aboutusimages/second_div.jpg';
import firstPng from './util/aboutusimages/first_png.png';
import fourthDiv from './util/aboutusimages/fourth_div.jpg';
import qOption from './util/aboutusimages/q_option.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Container fluid id = 'ftx'>
              <Row>
            <Col>1 of 1</Col>
              </Row>
            </Container>
    
    <Container id = 'fmain'>
    <Row>
      <Col md={4}>md=4</Col>

              <Col md={{ span: 4, offset: 3 }}>  <Row id = 'fta'>
              <h2>Discover Smart Investing 
              With the FTX
              Limited.
                </h2> 
              </Row>
              <Row id = 'ftc'>
                </Row>
              <Row id = 'ftd'>
            <p>The FTX Limited trading platform combines simplicity with sophistication to connect you to the world’s most volatile financial markets. Our dashboard display delivers one-click order execution and is equipped with the latest trading tools. Your trading is backed up by live charts and real-time data feeds, as well as trading signals and the latest market news and analysis.</p>
              </Row>

    </Col>

  </Row>

  <Row id = 'ftg'>
    <h2>Optimise your Trading
Experience.</h2>
    <p>The FTX Max Limited platform is flexible enough to meet every trading style and requirement.</p>
  </Row>
 


  <Row id = 'fth'>
      <Col md={{ span: 4, offset: 3 }}>  <Row id = 'fta'>
              <h2>Economic Calender
                </h2> 
              </Row>
              <Row id = 'ftc'>
                </Row>
              <Row id = 'ftd'>
            <p>Create a personal investment schedule and prepare for market volatility around key economic events, news and major decisions. The economic calendar is continually updated and events are rated by importance and relevance.</p>
              </Row>

    </Col>
    <Col md={4}>md=4</Col>
  </Row>
  

  <Row id = 'fth'>
      <Col md={4}>md=4</Col>

              <Col md={{ span: 4, offset: 3 }}>  <Row id = 'fta'>
              <h2>Price Alerts and
                  Analysis
                </h2> 
              </Row>
              <Row id = 'ftc'>
                </Row>
              <Row id = 'ftd'>
            <p>FTX Limited price alerts give you the freedom to step back from the markets until they meet your requirements. Set the rate at which you want to enter the markets and receive immediate notification when it’s time to trade.</p>
              </Row>

    </Col>

  </Row>

  <Row id = 'fth'>
      <Col md={{ span: 4, offset: 3 }}>  <Row id = 'fta'>
              <h2>Risk Management
                </h2> 
              </Row>
              <Row id = 'ftc'>
                </Row>
              <Row id = 'ftd'>
            <p>The automatic stop loss, take profit and order entry tools allow you to maximise your profit potential while reducing your risk of loss. The ‘set and forget’ tools will run in the background, relieving you from the need to monitor open trades.</p>
              </Row>

    </Col>
    <Col md={4}>md=4</Col>
  </Row>

  <Row id = 'fth'>
      <Col md={4}>md=4</Col>

              <Col md={{ span: 4, offset: 3 }}>  <Row id = 'fta'>
              <h2>Trading Signals
                </h2> 
              </Row>
              <Row id = 'ftc'>
                </Row>
              <Row id = 'ftd'>
            <p>Trading signals are provided by one of the financial industry’s leading research houses. They immediately alert you about possible trading opportunities on a real time basis. Although not infallible, trading signals are used by many experienced investors to enhance their own trading strategies.</p>
              </Row>

    </Col>

  </Row>


</Container>
            
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