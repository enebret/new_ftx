import * as React from 'react';
import './loginStyles.css';

function Form () {
    return (
        <div class='pd'>
            <div class = 'fr'>
            <form>
              <label for="fname">username</label>
              <input type="text" placeholder="username.."></input>
              <label for="fname">password</label>
              <input type="text" placeholder="password.."></input>
              <input type="submit" value="Submit"></input>
              </form>
            </div>
              
        </div>
    )
}

export default Form;