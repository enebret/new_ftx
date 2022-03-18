import * as React from 'react';
import './signupStyles.css';

function Reg () {
    return (
        <div class='pd'>
            <div class = 'fr'>
            <form>
              <label for="fname">Firstname</label>
              <input type="text" placeholder="enter firstname.."></input>
              <label for="fname">Lastname</label>
              <input type="text" placeholder="enter lastname.."></input>
              <label for="fname">Email</label>
              <input type="text" placeholder="enter email address.."></input>
              <label for="fname">Username</label>
              <input type="text" placeholder="enter uername.."></input>
              <label for="fname">password</label>
              <input type="text" placeholder="enter password.."></input>
              <input type="submit" value="Submit"></input>
              </form>
            </div>
              
        </div>
    )
}

export default Reg;