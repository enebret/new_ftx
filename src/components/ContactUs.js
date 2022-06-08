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





function ContactT () {
  const navigate = useNavigate();

    return (
    <div>
       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
         

            

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







          
        </div>
    )
}

export default ContactT;