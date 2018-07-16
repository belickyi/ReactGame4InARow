import React, { Component } from 'react'; 
import './App.css';
// Components
import Table from '../Table/Table'

class App extends Component {

  constructor() {
    super();

    this.state = {
      board : [
        [1,-1,-1,1,1,1,-1],
        [0,1,-1,-1,-1,1,0],
        [0,0,0,0,0,1,0],
        [0,1,0,0,1,1,0],
        [0,0,0,1,0,0,0],
        [1,0,0,0,0,0,1]
      ]
    };

    this.makeUp = this.makeUp.bind(this);
  }
  
  //Restart game
  restartGame() {
    this.setState({
      board: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      ]
    })
  }

  // This method gets columId and playerId
  makeUp(columId, plaerId) {
    this.state.board.map(function(column, i) {
      if (columId == i) {
        console.log(`Плеер № ${plaerId} кликнул по ${column}`)
        column.map(() => {
          
        })
      }
    })
  }

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
            <Table data={this.state.board}/>
          </div>

          <div className='right col-2'> {/* right column */}
            <img src="blue.png"></img>
            <div className="score">
              <span>Score </span>
              <span>0</span>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;