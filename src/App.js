import React from 'react';
import logo from './logo.svg';
import './App.css';
import axiosInstance from "./config/config"

function App() {

  React.useEffect(() => {
    // Fetch events when the component mounts
    const getStatus = async () => {
      try {
        const status = await axiosInstance.get("/live");
        console.log(status);
      } catch (error) {
        console.log(error);
      }
    };

    getStatus();
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
