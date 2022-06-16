/*jshint esversion: 8 */
import './styles/contactus.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import pol from './pix/pol.png';
import cal from './pix/cal.jpeg';



function ContactT () {
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

  <Container fluid id = 'ftx' style={{ backgroundImage: `url(${pol})`,  backgroundSize: '100% 100%', }}>
          <h2   style={{ color: 'white',  fontWeight: '200'}}>Get in Touch.</h2>
            </Container>     
<Container fluid id = 'xrp'>
  <h2 style={{ color: 'white',  fontWeight: '1000'}}>Contact us</h2>
</Container>

<Container id='xt'>
  <Row>
  <Col md={6}>
    <Form>
        <Row>
          <h1>Contact Form</h1>
        <Col md={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
        Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="Name" />
    </Col>
    <Col md={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
        Email
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="Email" />
    </Col>
        </Row>

        <Form.Group id = 'rw'>
        <Form.Label htmlFor="inlineFormInputName" >
        Subject*
      </Form.Label>
      <Form.Control id="" placeholder="" />
        </Form.Group>

      <Form.Group id = 'rw'>
      <Form.Label htmlFor="inlineFormInputName" >
        Message*
      </Form.Label>
      <Form.Control as="textarea" id="" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" id = 'lit'>
    Send Message
  </Button>
    </Form>
  </Col>
  <Col md={6}>
    <h1>FTX LIMITED</h1>
  </Col>
  </Row>
</Container>
          
        </div>
    )
}

export default ContactT;