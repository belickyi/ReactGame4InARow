import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HellowWorld from './First'

class App extends Component {
  render() {
    
    var myStyle = {
      fontSize: 50
    }
    function onpress() {
      alert('Hello');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" style = {myStyle}>Hello world</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <HellowWorld  name='Anton' onpress={onpress}/>
        
      </div>
    );
  }
}

export default App;