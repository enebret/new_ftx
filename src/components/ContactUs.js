/*jshint esversion: 8 */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import firstDiv from './util/aboutusimages/first_div.jpg';
import './styles/contactus.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';

function ContactT () {
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
         

         {/*X-Small	None	<576px
                Small	sm	≥576px
              Medium	md	≥768px
                Large	lg	≥992px
        Extra large	xl	≥1200px
      Extra extra large	xxl	≥1400px */}
            

          <div class = 'cont'>
          <Container >
              <Row >
                <Col ><h1 id = 'ast' style={{ textTransform: 'uppercase' }}>Contact Form</h1></Col>
              </Row>
            </Container>

          </div>

          <div class = 'dont'>
          <Row className="g-2">
  <Col md>
  <Form.Label>*FullName</Form.Label>
    <FloatingLabel controlId="floatingInputGrid" label="*enter full-name">
      <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
  </Col>
  <Col md>
  <Form.Label>Email</Form.Label>
    <FloatingLabel controlId="floatingSelectGrid" label="*enter email">
    <Form.Control type="password" placeholder="name@example.com" />
    </FloatingLabel>
  </Col>
</Row>

<Row className="g-2">
  <Col md>
  <Form.Label>*Subject</Form.Label>
    <FloatingLabel controlId="floatingInputGrid" label="*enter subject">
      
      <Form.Control type="email" placeholder="name@example.com" />
    </FloatingLabel>
  </Col>
  
</Row>

<Row className="g-2">
  <Col md>
  <Form.Label>*Message</Form.Label>
    <FloatingLabel controlId="floatingInputGrid" label="*type message here">
      <Form.Control type="email" placeholder="name@example.com" 
      style={{ height: '200px' }}
      />
    </FloatingLabel>
  </Col>
  
</Row>
<Button variant="primary" type="submit">
    Submit
  </Button>
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

export default ContactT;