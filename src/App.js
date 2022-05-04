import * as React from 'react';
import './App.css';
import Body from './components/body.jsx';
import Form from './components/login.js';
import Reg from './components/signup.jsx';
import AboutUs from './components/AboutUs.js';
import Investment from './components/Investment.js';
import ContactUs from './components/ContactUs.js';
import Faq from './components/Faq.js';
import Partnership from './components/Partnership';
import { Routes, Route, Link } from "react-router-dom";
//errors are due to js file extension
/* eslint no-unused-vars : "off" */
function App() {
/*logic lives here*/

  return (
     
        <div>
          <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="form" element={<Form />}></Route>
          <Route path="registration" element={<Reg />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="investment" element={<Investment />}></Route>
          <Route path="partnership" element={<Partnership />}></Route>
          <Route path="contactus" element={<ContactUs />}></Route>
          <Route path="faq" element={<Faq />}></Route>

          
        </Routes>
          
        </div>
    
  );
}

export default App;
