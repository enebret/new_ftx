/*jshint esversion: 8 */


import './styles/investment.css';
import firstDiv from './util/aboutusimages/first_div.jpg';
import vgDiv from './util/investment/undraw.png';
import pgDiv from './util/investment/external.png';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import qOption from './util/aboutusimages/q_option.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Investment () {
  const navigate = useNavigate();

    return (
    <div>
        <div class = 'main'>
            <div class="header">
            <div class ='nav'>
               <nav>
                 <img id="lg" src={logo} alt="logo" />
                 <a onClick={() => navigate('/')}>HOME</a>
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
            <Container fluid id = 'ftxx'>
              <Row  >
                <h2 style={{}} id='hdx'>Our <span style={{ fontWeight: '1000'}}>Investment Plan.</span></h2>
              </Row>
            </Container>

            <Container id = 'fda'>
            <Row id = 'mpm'>
                <Col md={{ span: 8, }}>  <Row id = 'yta'>
              </Row>
              
              <Row id = 'ftd'>
              <h2 style={{ fontWeight: '1000', color: 'black'}}>start with an <span   style={{ color: 'green', }}>Investment Plan.</span>
                </h2> 
            <p  id = 'lkq'>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests. Our support team will get assistance from AI-powered suggestions.</p>
            <p>FTX investment strategy is designed to deliver a well-balanced and globally diversified portfolio that will maximize sustained long-term returns without incurring undue risk. We offer a simple attitude to stock trading with an extraordinary Managed Account Platform that allows users to watch their accounts grow by logging in 24 hours a day. Clients have the ability to view their account anytime but are not required to make any trade accomplishment decisions on their own behalf.</p>
            <p>To reach the target of this strategy, our trading expert have designed multiple investment packages for you to choose from based on your financial needs. You can choose yourself which plan to invest into. But if you have some doubts and hesitate which plan to take, you can consult with our expert trading team.</p>
            <p>Our expert trading team studies the clients’ portfolio, financial history and stability of each investor and before recommending any package to you they look through all the aspects of your account. If you follow the expert advice you for sure get stable profit.</p>
              </Row>
        </Col>
    <Col md={4}><Row></Row></Col>
  </Row>
      </Container>
      
      <Container  id = 'xct'>
      <Row id = ''>
      <Col md={4} ><Row>
      <Card style={{ width: '18rem' }}>
      
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Text>
        $300 - $9,999K
    </Card.Text>
    <Card.Text>
    All contracts are valid for 1 year and 100% guaranteed.
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text>
    All contracts are valid for 1 year and 100% guaranteed.
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text>
    All contracts are valid for 1 year and 100% guaranteed.
    </Card.Text>
    <Card.Text id = 'fcd'></Card.Text>
    <Card.Text>
    All contracts are valid for 1 year and 100% guaranteed.
    </Card.Text>
    <Button variant="primary">Invest Now</Button>  
  </Card.Body>
</Card>  
        </Row></Col>

        <Col md={4}> <Row id = ''> 
              
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Invest Now</Button>
</Card.Body>
</Card>
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

export default Investment;