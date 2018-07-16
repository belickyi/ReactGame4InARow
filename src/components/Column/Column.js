import React, { Component } from 'react';
// Components
import Cell from '../Cell/Cell'

// Gets column array
class Column extends Component {
  render() {
    // Column array transform to div element
    var cellArr = this.props.trueArr.map((trueArr, i) => {
      return (
      <div className={`'col-1' ${i}`} key={`column-${i}`}>
        {trueArr.map((cell, i) => <div className='cell' key={`cell-${i}`}>{cell}</div>)}
      </div>);
    })

    // Pass new array to Cell component
    return (
      <Cell cellArr = {cellArr} />
    );

  };

};

export default Column;