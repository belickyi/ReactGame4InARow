import React, { Component } from 'react';
// Components
import Column from '../Column/Column'

class Table extends Component {
  render() {
    var column = [];

    for (let i = 0; i < this.props.data[0].length; i++) {
      var col = this.props.data.map(function(cell) { // [1,-1,-1,1,1,1,-1]
        return cell[i];
      })
      column.push(col);
    }

    return (
      <Column column={column} />
    );
  }
}

export default Table;