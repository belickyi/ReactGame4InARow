import React, { Component } from 'react';
import './Board.css';
import { Redirect } from 'react-router-dom';
// Components
import Table from '../Table/Table';

// Main component

export default class Board extends Component {

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

    // Search 4 in a column
    this.state.grid.forEach((column) => { // [0, 1, 0, 0, 0, 0]
      let lastCell = 0; // Предыдущая
      let inRow = 0; // Сколько вхождений

      column.forEach((cell) => { // [1]

        if (cell === lastCell & cell !== 0 ) { // Если ячейка ровна предыдущей inRow++
          inRow++;
          if (inRow == 3) { 
            alert(`URAAAA ${cell}`);
            return this.restartGame();
          }
        } else {
          inRow = 0;
        };
        lastCell = cell;

      });
      
    });

    // Search 4 in a row
    for (let i = 0; i < this.state.grid[0].length; i++) { // [0, 1, 0, 0, 0, 0, 0]
      let lastCell = 0; // Предыдущая
      let inRow = 0; // Сколько вхождений

      for (let index = 0; index < this.state.grid.length; index++) { // [0]
        let cell = this.state.grid[index][i];

        if (cell === lastCell & cell !== 0 ) { // Если ячейка ровна предыдущей inRow++
          inRow++;
          if (inRow == 3) { 
            alert(`URAAAA ${cell}`);
            return this.restartGame();
          }
        } else {
          inRow = 0;
        };
        lastCell = cell;
      }
      
    }

    // Search 4 in a diagonal
    for (let i = 0; i < this.state.grid[0].length; i++) { // [0, 1, 0, 0, 0, 0, 0]
      let lastCell = 0; // Предыдущая
      let inRow = 0; // Сколько вхождений

      for (let index = 0; index < this.state.grid.length; index++) {
        let cell = this.state.grid[index][i];
      };

    };



  };

  render() {
    const {state} = this.props.location;
    if (!state || !state.fromStartScreen) {
      return (<Redirect to="/" />);
    }
    return (
      <div className="App col">
        <div className='row justify-content-between'>

          <div className='left col-2'> {/* left column */}
            <div className='red'></div>
            <div className="score">
              <span className='name'>{`${state.userName}:`}</span>
              <br></br>
              <span>Score </span>
              <span>0</span>
            </div>
          </div>

          <div className='board'> {/* board */}
            {/* Pass table array to Table component */}
            <Table grid={this.state.grid} onPress={this.addStep.bind(this)} />
          </div>

          <div className='right col-2'> {/* right column */}
            <div className='blue'></div>
            <div className="score">
              <span className='name'>{`${state.userName2}:`}</span>
              <br></br>
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