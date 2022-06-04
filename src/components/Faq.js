/*jshint esversion: 8 */


import firstDiv from './util/aboutusimages/first_div.jpg';
import './styles/faq.css';
import { useNavigate } from 'react-router-dom';
import logo from './util/logo.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';


function Faq () {
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
                 <a onClick={() => navigate('/')}>PLATFORM</a>
                 <a onClick={() => navigate('/partnership')}>PARTNERSHIP</a>
                 <a onClick={() => navigate('/contactus')}>CONTACT US</a>
                 <button id = 'login-button' onClick={() => navigate("form")}>Login</button>
               </nav>
              </div>
            </div>
            
<Container fluid id = 'fax'>
      <Row >
        <h2 id = 'faxd'>Frequent <span  style={{ fontWeight: '1000'}}>Questions.</span></h2>
      </Row>
</Container>

<Container fluid id = 'faxe'>
      <Row >
        <h2 id = 'faxee'>Frequent Questions.</h2>
      </Row>
</Container>

<Container id = 'raq'>
      <Row>
        <h3>If we see that this section is useful for you and there is a need, we will add new questions here. Please, before contacting <span  style={{ fontWeight: '1000', color: 'yellowgreen'}}>Customer Support</span> read carefully this section.</h3>
      </Row>
      <Row></Row>
      <Row>
        <Col  md={8}><Row >
            <h2  style={{ color: 'black'}}>General Questions</h2>
          </Row>
          <Row>
          <Accordion defaultActiveKey="0" flush>
             <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>

                                            <Row id = 'dfg'>
                                                <Accordion defaultActiveKey="0" flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                                                          <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                            est laborum.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>

                                            <Row id = 'dfg'>
                                                <Accordion defaultActiveKey="0" flush>
                                                  <Accordion.Item eventKey="0">
                                                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                                                          <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                            est laborum.
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                              </Accordion>
                                            </Row>

                                            <Row></Row>
          </Col>
                <Col md = {3} id = 'tdr'><Row id = 'rex'>
                      <p  style={{ marginTop: '15%'}}>CAN'T FIND YOUR QUESTION?</p>
                      <p  style={{  color: '#777'}}>Our customer support team are ready to answer your questions.</p>
                      <Button variant="primary" type="submit"  style={{ backgroundColor: '#fff',  fontWeight: '600', color: 'green', border: '1px, white', marginBottom: '30%', width: '60%', marginLeft: '22%'}}>Contact us now</Button>
                  </Row>
                  <Row>
                    
                  </Row>
                  <Row></Row>
                  </Col>
        </Row>
            </Container>
           
            {/*the below div is last div/ function component div*/}
            </div>
              




          
        </div>
    )
}

export default Faq;