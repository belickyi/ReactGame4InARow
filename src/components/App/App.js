import React, { Component } from 'react'; 
import './App.css';
// Components
import Table from '../Table/Table'

// Main component

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      grid : [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],

      countStep : 0
    };
  };

  /*** 
   * Function restart game
  */
  restartGame() {
    this.setState({
      grid: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
      countStep : 0
    })
  };

  /****
   * This function gets columId, playerId and change their
   */
  addStep(columId, playerId) {

    // Add sum step +1
    this.setState({
      countStep : this.state.countStep + 1
    });

    // PlayerID
    this.state.countStep % 2 === 0 ? playerId = 1 : playerId = 2;

    // Add step in grid
    let newArr = this.state.grid;
    for (let i = 5; i >= 0; i--) {
      if (newArr[columId][i] === 0) {
        newArr[columId][i] = playerId
        break;
      }
    }

    this.setState({
      grid: newArr
    })

  };

  render() {
    return (
      <div className="App col">
        <div className='row justify-content-between'>

          <div className='left col-2'> {/* left column */}
            <img src="red.png"></img>
            <div className="score">
              <span>Score </span>
              <span>0</span>
            </div>
          </div>

          <div className='board'> {/* board */}
            {/* Pass table array to Table component */}
            <Table grid={this.state.grid} onPress={this.addStep.bind(this)} />
          </div>

          <div className='right col-2'> {/* right column */}
            <img src="blue.png"></img>
            <div className="score">
              <span>Score </span>
              <span>0</span>              
            </div>
          </div>
          
          <div className='row col-12'> {/* button */}
            <div className='col-2'>
            </div>
            <div className='mt-4'>
              <button className='btn-lg btn-primary' onClick={this.restartGame.bind(this)}>New game</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}