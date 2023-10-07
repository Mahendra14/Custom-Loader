import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);

  }, [])
  
  return (
    <div className="App">
      {
        loader ?
        <ClimbingBoxLoader
        color="#36d7b7"
        loading={loader}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        :
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
        </a>
      </header>
      }
    </div>
  );
}

export default App;
