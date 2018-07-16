import React, { Component } from 'react';
// Components
import Column from '../Column/Column'

// Gets table array, turn matrix, split it into columns
class Table extends Component {
  render() {
    var trueArr = [];
    // Turn matrix, split it into columns
    for (let i = 0; i < this.props.data[0].length; i++) {
      let col = this.props.data.map(cell => cell[i])
      trueArr.push(col);
    };

    // Pass new array to Column component
    return (
      <Column trueArr={trueArr} />
    );
  };
};

export default Table;