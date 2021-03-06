import React from 'react';
import logo from './logo.svg';
// @ts-ignore
import {Drawer, Test} from 'components';
import './App.css';

const {Box} = Drawer
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Drawer condition={true}>
          <Box>
            <span>dfad</span>
          </Box>
        </Drawer>
        <Test></Test>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
