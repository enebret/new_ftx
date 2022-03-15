import logo from './logo.svg';
import './App.css';

//errors are due to js file extension

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {/*only make this type of comments inside components*/}
          {/*ignore the syntax error in the code tag*/}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          New React
        </a>
      </header>
    </div>
  );
}

export default App;
