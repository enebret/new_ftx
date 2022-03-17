import * as React from 'react';
import './App.css';
import Body from './components/body.jsx'
import Form from './components/login.jsx'
import { Routes, Route, Link } from "react-router-dom"
//errors are due to js file extension
/* eslint no-unused-vars : "off" */
function App() {
{/*logic lives here*/}

  return (
     
        <div>
          <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="about" element={<Form />}></Route>
        </Routes>
          
        </div>
    
  );
}

export default App;
