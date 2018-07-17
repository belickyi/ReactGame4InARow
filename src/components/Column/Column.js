import React, { Component } from 'react';
// Components
import Cell from '../Cell/Cell'

// Gets column array

export default class Column extends Component {
  
  render() {
    let cells = this.props.turnedArr.map( (column, x) => {
      return (
        <div className={`'col-1' id-col='${x}'`} key={`column-${x}`}>

          {column.map( (cell, y) => {
            return <Cell key={`${x}-${y}`}
              cell = {cell} 
              x = {x} 
              y = {y} 
              onPress={this.props.onPress} />
          } )}
        
        </div>
      );
    } );

    return (
      <div className='row justify-content-between'>
        {cells}
      </div>
    );

  };

};