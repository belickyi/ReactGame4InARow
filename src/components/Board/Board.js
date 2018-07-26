import React, { Component } from 'react';
import './Board.css';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    var cellId;
    let newArr = this.state.grid;
    for (let i = 5; i >= 0; i--) {
      if (newArr[columId][i] === 0) {
        newArr[columId][i] = playerId;
        cellId = i;
        break;
      }
    }
    this.setState({
      grid: newArr
    })

    // Search 4 in a column
    var cell = this.state.grid[columId][cellId];
    let countGor = 0;
    let countVer = 0;

    for (let x = 0; x < this.state.grid.length; x++) {

      // горизонталь
      if (this.state.grid[x][cellId] === cell) {
        // если ячейка перебора совпадает с номером игрока
        countGor++;
        if (countGor === 4) { alert('Uraaa goriz!!'); this.restartGame(); }
      } else {
        countGor = 0;
      }

      // вертикаль
      if (this.state.grid[columId][x] === cell) {
        // если ячейка перебора совпадает с номером игрока
        countVer++;
        if (countVer === 4) { alert('Uraaa vertical!!'); this.restartGame(); }
      } else {
        countVer = 0;
      }
    }

      // диагональ с лево на право
      // if ( (columId - x) >= 0 & (cellId + x) <= 5  ) {
      //   console.log(`Вариант первый ${columId - x}, ${cellId + x}`)
      // }

      let firstCellInDiag = 5 - cellId;
      console.log(firstCellInDiag)
  };

  render() {

    const {state} = this.props.location;
    if (!state || !state.fromStartScreen) {
      return (<Redirect to="/" />);
    }

    return (
      <div className="App col">
        <div className='row justify-content-between'>
          <div className='row col-12'> {/* button */}
            <div className='col-2'>
            </div>
          
            <div className='mt-4 buttons'>
              <button className='btn btn-light-blue' onClick={this.restartGame.bind(this)}><i className="fa fa-repeat mr-3"></i>Начать заного</button>
              <Link to={{pathname: '/'}}>
                    <button className="btn btn-mdb-color"><i className="fa fa-tasks mr-3"></i>На главную</button>
              </Link>
            </div>
          
          </div>

          <div className='left col-2'> {/* left column */}
            <div className='redly'></div>
            <div className="score">
              <span className='name'>{`${state.userName1} :`}</span>
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
              <span className='name'>{`${state.userName2} :`}</span>
              <br></br>
              <span>Score </span>
              <span>0</span>              
            </div>
          </div>

          <div className='row col-12'> {/* button */}
            <div className='col-2'>
            </div>

            <div className='mt-2 col-4 nextPlayer'>
              <span className=''>{`Ход игрока : ${this.state.nextPlayer}`}</span>
            </div>
          </div>

        </div>
      </div>
    );
  }
}