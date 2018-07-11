import React, { Component } from 'react'; 
import './App.css';
import Table from '../Table/Table'
import Column from '../Column/Column'

class App extends Component {
  render() {
    var tableArr = [
      [1,-1,-1,1,1,1,-1],
      [0,1,-1,-1,-1,1,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
  ];

  var user = {
    firstName: "Вася",
    sayHi: function() {
      alert( this.firstName );
    }
  };
  
  setTimeout(user.sayHi(), 1000); // undefined (не Вася!)

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
            <Table data={tableArr}/>
            {/* <table className="table">
              <tbody>
                <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td>0</td><td>1</td><td></td><td></td></tr>
              </tbody>
            </table> */}
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