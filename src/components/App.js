import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Board from './Board/Board'
import Startscreen from './StartScreen/StartScreen'
import GameOver from './GameOver/GameOver'
import './StartScreen/startscreen.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


// Router component

export default class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className='container'>
          <Route path="/" exact={true} component = { Startscreen } />
          <Route path="/Board" component = { Board } />
          <Route path="/GameOver" component = { GameOver } />
        </div>
      </HashRouter>
    );
  }
}