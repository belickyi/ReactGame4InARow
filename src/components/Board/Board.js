import React, { Component } from 'react';
import './Board.css';
import { Redirect } from 'react-router-dom';
// Components
import Table from '../Table/Table';

// Main component

export default class Board extends Component {

  constructor(props) {
    super(props);

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

      countStep : 0,

      nextPlayer : this.props.location.state.userName1
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
      countStep : 0,
    })
  };

  /****
   * This function gets columId, playerId and change their
   */
  addStep(columId) {

    // Add sum step +1
    this.setState({
      countStep : this.state.countStep + 1
    });

    // nextPlayer
    if (this.state.countStep % 2 === 1) {
      this.setState({
        nextPlayer: this.props.location.state.userName1
      })
    } else {
      this.setState({
        nextPlayer: this.props.location.state.userName2
      })
    }
    
    // PlayerID
    let playerId;
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
    console.log('sad')


  };

  render() {

    const {state} = this.props.location;
    if (!state || !state.fromStartScreen) {
      return (<Redirect to="/" />);
    }

    return (
      <div className="App col">
        <div className='row justify-content-between'>

          <div className='row col-12 justify-content-between'> {/* button */}
            <div className='col-2'>
            </div>


            <div className='mt-4 col-4 nextPlayer'>
              <span className=''>{`Ход игрока : ${this.state.nextPlayer}`}</span>
            </div>


            <div className='col-4 mt-4 buttons'>
              <button className='btn btn-indigo btn-sm' onClick={this.restartGame.bind(this)}>Restart game</button>
              <button className='btn btn-indigo btn-sm' onClick={this.restartGame.bind(this)}>Restart game</button>
            </div>
            <div className='col-2'>
            </div>
          </div>

          <div className='left col-2'> {/* left column */}
            <div className='redly'></div>
            <div className="score">
              <span className='name'>{`${state.userName1}:`}</span>
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
            <div className='bluishly'></div>
            <div className="score">
              <span className='name'>{`${state.userName2}:`}</span>
              <br></br>
              <span>Score </span>
              <span>0</span>              
            </div>
          </div>



        </div>
      </div>
    );
  }
}