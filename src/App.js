import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import request from './utils/request';

function App() {

  console.log(process.env)

  useEffect(()=>{
    request({
      method: 'GET',
      url: '/hdbsp-prodcost/v1/3/materialCost?menuId=5803',
    }).then((response)=>{
      console.log('response', response);
    }).catch((error)=>{
      console.log('error', error);
    })
  }, [])
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
