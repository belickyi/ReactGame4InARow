import React, { Component } from 'react';
// Components
import Cell from '../Cell/Cell'

// Gets column array
class Column extends Component {
  render() {
    
    // Column array transform to div element
    var cellArr = this.props.column.map((column) => { // [1, 0, 0, 0, 0, 0]
      return (
      // <div className='col-1'>
      //    <div> 1 </div>
      //    <div> 0 </div>
      //    ...     
      // </div>
      <div className='col-1'>
        {column.map((cell) => <div>{cell}</div>)}
      </div>);
    })

    // Pass new array to Cell component
    return (
      <Cell cellArr = {cellArr} />
    );

  };

};

export default Column;