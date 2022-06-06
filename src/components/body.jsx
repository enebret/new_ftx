/*jshint esversion: 8 */
//{/* use this to comment inside jsx*/}
import './styles/body.css';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Cg from './coingecko/cg.js';
import logo from './util/logo.JPG';
import usplash from './util/usplash.jpg';
import fx from './util/fx.png';
import map from './util/map.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';







function Body () {
  const navigate = useNavigate();

    return (
     <div class='main'>
          <div class="header">
            
            <div class ='nav'>
               <nav>
                 <img id="lg" src={logo} alt="logo" />
                 <a href="#" >HOME</a>
                 <a  onClick={() => navigate('aboutus')}>COMPANY</a>
                 <a onClick={ () => navigate('/investment')}>INVESTMENT</a>
                 <a onClick={ () => navigate('/faq')}>FAQ</a>
                 <a href="/platform">PLATFORM</a>
                 <a onClick={ () => navigate('/platform')}>PARTNERSHIP</a>
                 <a onClick={ () => navigate('/contactus')}>CONTACT US</a>
                 <button id = 'login-button' onClick={() => navigate("form")}>Login</button>
               </nav>
              </div>
            </div>
       
       <Container fluid id = 'hep'>
       <Col md={{ span: 5}}>
       <Row  id = 'hel'>
            <h2 id = 'het'  style={{ color: 'white',  fontWeight: '700'}}>Automate Cryptocurrency trading with our <span  style={{ color: 'black'}}>Simple</span> & flexible platform.</h2>
            <p style={{ color: 'white',  fontWeight: '200'}}>Our team of experienced traders does the research and trading for all ours members with our winning business models to skyroket earnings.</p>
            <Button variant="primary" type="submit"  style={{ backgroundColor: 'green',  fontWeight: '600', color: 'white', border: 'none', width: '200px', marginTop: '4%'}}>
                  GET STARTED TODAY
              </Button>
        </Row>
       </Col>
       </Container>

       <Container id = 'lox'>
         <Col md={{ span: 3}}>
            <Row>
              <h2 style={{ color: 'black',  fontWeight: '700'}}><span style={{ color: '#777',  }}>Trading made</span> easy with us</h2>
              <p  style={{ marginTop: '2%'}}>With us trading has been made easy. Choose from 250+ financial instruments with a trusted, award-winning broker.</p>
            </Row>
         </Col>

         <Col md={{ span: 3}}>
          <Row id = 'tex'>
            <h4 style={{ color: '#777',  fontWeight: '700'}}><img></img>GOLD</h4>
            <p  style={{ marginTop: '5%'}}>We offer a wide range of gold stock trading. Based on our business model we ensure and guarantee returns on every trade</p>
          </Row>
          <Row id = 'tex'>
            <h5 style={{ color: '#777',  fontWeight: '700'}}><img></img>CRYPTOCURRENCY</h5>
            <p  style={{ marginTop: '5%'}}>We also trade on other Cryptocurrencies to help increase our clients profit margin.</p>
          </Row>
         </Col>

         <Col md={{ span: 4}}>
          <Row id = 'lex'>
            <h4 style={{ color: '#777',  fontWeight: '700'}}><img></img>FOREX</h4>
            <p  style={{ marginTop: '5%'}}>With our experience in trading, we have been able to build trust with over 4k clients all over the world, as we do the tasking job for you.</p>
          </Row>
          <Row id = 'dex'>
            <h4 style={{ color: '#777',  fontWeight: '700'}}><img></img>STOCK BOND</h4>
            <p  style={{ marginTop: '5%'}}>Invest in Stock and Bonds, the safest and widely accepted investment platform.</p>
          </Row>
          <Row id = 'lex'>
            <h4 style={{ color: '#777',  fontWeight: '700'}}><img></img>CANABIS</h4>
            <p  style={{ marginTop: '5%'}}>FTX LTD has turned cannabis stock trading into a very comfortable, speedy, easy, safe, and relatively risk free process</p>
          </Row>
         </Col>
       </Container>
       <Container id = 'fox'>
         <Row></Row>
         <Row></Row>
       </Container>

            {/*the below div is last div/ function component div*/}
          </div>
    )
}

export default Body;