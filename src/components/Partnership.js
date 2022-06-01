/*jshint esversion: 8 */

import './styles/partnership.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';

import firstDiv from './util/aboutusimages/first_div.jpg';
import secondDiv from './util/partnershipimages/cryptocurrency.png';
import thirdDiv from './util/partnershipimages/remote.png';
import fourthDiv from './util/partnershipimages/slack.png';
import fifthDiv from './util/partnershipimages/spreadsheet.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
            <Container fluid id = 'ftx'>
              <Row >
            <h2 id = 'btr0'>Use the leverage of <span style={{ color: 'green',  fontWeight: '1000'}}>Referrals</span></h2>
              </Row>
              <Row md={4} id = 'btr1'>
              <Button variant="primary" type="submit"  style={{ backgroundColor: 'green',  fontWeight: '600'}}>
                  START EARNING TODAY
              </Button>
              </Row>
            </Container>
            <Container fluid id = 'rftc'>
              <Row >
                <h2 id = 'rftd' style={{ color: 'white',  fontWeight: '200'}}>Affiliate Program</h2>
              </Row>
            </Container>
            <Container fluid id = 'rfte'>
              <Row >
                <p id = 'rftf'>With our affiliate program you can make money by referring clients to FXT LTD platform. Promote FXT LTD website by placing our banners or text ads on your website, blog or just put the affiliate link in message forum signatures, email signatures or any other places.</p>
                <p id = 'rftf'>If any visitor clicks on the banner or text ad, opens a new account with FXT LTD and makes an investment, you will get a   <span style={{ color: 'green',  fontWeight: '600'}}>6% commission</span> from the total of their invested funds. Any additional investment made by your affiliate will generate further 6% commission. Commission is credited to your account balance instantly, without any delays.</p>
              </Row>

              <Row id = 'rftg'>
              <Col md={{ span: 5}}>  <Row id = ''>
              <h2>Trading Signals
                </h2> 
              </Row>
              <Row id = 'ftc'>
                </Row>
              <Row id = 'ftd'>
            <p>Trading signals are provided by one of the financial industry’s leading research houses. They immediately alert you about possible trading opportunities on a real time basis. Although not infallible, trading signals are used by many experienced investors to enhance their own trading strategies.</p>
              </Row>
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row md={5} id = 'btr4'>
              <Button variant="primary" type="submit"  style={{ backgroundColor: 'green',  fontWeight: '600'}}>
                  GET STARTED TODAY
              </Button>
              </Row>



            </Container>


            <Container id = 'fmain'>
              <Row>

              </Row>

              <Row></Row>
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

export default Partnership;