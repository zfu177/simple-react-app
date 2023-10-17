import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function MyButton() {
  return (
    <a className="waves-effect waves-light btn" href="index.html">
      Test
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar color="light-blue lighten-4" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <p>
            <MyButton />
          </p>
        </a>
      </header>
    </div>
  );
}

export default App;
