import React, {Component} from 'react'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//errors are due to js file extension

function App() {
{/*logic lives here*/}

  return (
    <Nav variant="pills" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Option 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default App;
