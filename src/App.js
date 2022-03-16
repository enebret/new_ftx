import React, {Component} from 'react'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//errors are due to js file extension

function App() {
{/*logic lives here*/}

  return (
    <div>
    <Container>
  <div class='top'>
  <Row>
    <Col>logo</Col>
    <Col>
    <Button variant="outline-success">Login</Button>
    </Col>
  </Row>
  </div>
</Container>
<Container>
  <div class='center-page'>
   <Row className="justify-content-md-center">
   <p>ALL ABOUT FTX</p>
   </Row>
  </div>
</Container>
<Container>
  <div class='table'>

  </div>
</Container>
</div>
  );
}

export default App;
