import React, { Component } from 'react';
// Component
import Cell from '../Cell/Cell'

class Column extends Component {
  render() {
    
    var cellArr = this.props.column.map(function(column) { // [1, 0, 0, 0, 0, 0]
      return (
      <div className='col-1'>
        {column.map((cell) => <div>{cell}</div>)}
      </div>);
    })

    return (
      <Cell cellArr = {cellArr} />
    );

  }

}

export default Column;