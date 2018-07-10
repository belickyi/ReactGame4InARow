import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
import Title from '../Title/Title'

class App extends Component {
  render() {
    function press() {
      alert('hi');
    }
    return (
      <div className="App row align-items-center">
        <div className='box col-5'>Hello</div>
      </div>
    );
  }
}

export default App;