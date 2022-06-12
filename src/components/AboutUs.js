/*jshint esversion: 8 */

import './styles/aboutus.css';
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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import ab from './pix/lapy.jpg';
import mapy from './pix/mapy.png';




function Platform () {
  const navigate = useNavigate();

    return (
    <div>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">FTX</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link onClick={ () => navigate('/')}>Home</Nav.Link>
      <Nav.Link onClick={() => navigate('/aboutus')}>Company</Nav.Link>
      <Nav.Link onClick={() => navigate('/investment')}>Investment</Nav.Link>
      <Nav.Link onClick={() => navigate('/faq')}>Faq</Nav.Link>
      <Nav.Link onClick={() => navigate('/platform')}>Platform</Nav.Link>
      <Nav.Link onClick={() => navigate('/partnership')}>Partnership</Nav.Link>
      <Nav.Link onClick={() => navigate('/contactus')}>Contact us</Nav.Link>
 
    </Nav>
    <Nav id = 'fr'>
    <NavDropdown title="My Account" id="collasible-nav-dropdown" >
      <Form id = 'fc'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Signin
  </Button>
  <Form.Group id = 'txy' >
  <Form.Text >
  Don't have an account yet? <a href='' onClick={() => navigate('/signup')}>CREATE AN ACCOUNT NOW</a>
    </Form.Text>
  </Form.Group>
</Form>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


            <Container fluid id = 'ftx' style={{ backgroundImage: `url(${ab})` }}>
              <Row>
            <h2 style={{ color: "white" }}>CFD Trading - Cryptocurrency</h2>
              </Row>
            </Container>
    
    <Container fluid  style={{ padding: "5%", backgroundColor:'#eee'  }}>
    <Row >
      
      <Col md={{ span: 6, }}>  <Row id = 'fta'>
       <h2>Open Leveraged CFD 
         Trades on Cryptocurrencies
         </h2> 
       </Row>
      
       <Row id = 'ftd'>
     <p style={{ lineHeight: "2" }}>FTX Limited allows you to gain high levels of exposure with relatively small investment sums, using up to x200 leverage. When you open leveraged positions you are basically investing using Trade Max Limited`s money and can make much higher profits. We strongly recommend that you visit our education center to learn more about how to use leverage effectively.</p>
       </Row>
       <img src= '/pix/btc.png' style={{ marginLeft: "5%" }}/>      
       <img src= '/pix/rp.png' style={{ marginLeft: "5%" }}/>
       <img src= '/pix/dg.png' style={{ marginLeft: "5%" }}/>
       <img src= '/pix/lt.png' style={{ marginLeft: "5%" }}/>
       </Col>

<Col md={6} ><Row><img id="npq" src={mapy} alt="q_option" /></Row></Col>
</Row>
</Container>

<Container  fluid  style={{ padding: "5%" }}>
<Row style={{ margin: "auto" }}>
      <Col md={{ span: 6, }}>  <Row id = 'fta'>
              <h2>Who Can Trade Cryptocurrencies?</h2> 
              </Row>
              
              <Row style={{ lineHeight: "2" }}>
            <p>Online Cryptocurrency trading is already a highly popular form of investment with millions of traders worldwide. Almost anybody can trade Cryptocurrencies if they are willing to apply the basic principles of risk management. The Arbitrage Compass online Education Center contains all the learning tools and educational resources that you need to begin online Cryptocurrency trading.</p>
            <p> Many of Trade Max Limited top investors signed up as absolute beginners with no experience of the financial markets. They used the Education Center and free Demo Account to master the basics of Cryptocurrency trading. Cryptocurrency traders range from novice investors who trade part time, to expert investors who manage complex personal portfolios on a full time basis. The Trade Max Limited platform gives you the freedom to set your own financial goals and manage your own investments.</p>
              </Row>

    </Col>
    <Col md={6}><Row><img id="npq" src={secondDiv} alt="q_option" /></Row></Col>
  </Row>
  
</Container>

<Container  fluid  style={{ padding: "5%", lineHeight: "2" }}>
<Row >
      <Col md={6}><Row><img id="npq" src={fourthDiv} alt="q_option" /></Row></Col>

              <Col md={{ span: 6}}>  <Row id = 'fta'>
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
</Container>

<Container  style={{ padding: "5%", lineHeight: "2" }}>
<Row>
      <Col md={{ span: 6}}>  <Row id = 'fta'>
              <h2>Risk Management
                </h2> 
              </Row>
              <Row id = 'ftc'>
                </Row>
              <Row id = 'ftd'>
            <p>The automatic stop loss, take profit and order entry tools allow you to maximise your profit potential while reducing your risk of loss. The ‘set and forget’ tools will run in the background, relieving you from the need to monitor open trades.</p>
              </Row>

    </Col>
    <Col md={6}><Row><img id="npq" src={firstPng} alt="q_option" /></Row></Col>
  </Row>
</Container>

<Container fluid  style={{ padding: "5%", lineHeight: "2"  }}>
  
  <Row >
      <Col md={6}><Row><img id="npq" src={qOption} alt="q_option" /></Row></Col>

              <Col md={{ span: 6}}>  <Row id = 'fta'>
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
            
          
        </div>
    )
}

export default Platform;