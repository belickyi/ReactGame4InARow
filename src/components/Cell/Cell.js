import React, { Component } from 'react';
// Component

class Cell extends Component {
  render() {
    return (
    <div className='row justify-content-between'>
      {this.props.cellArr}
    </div>);
  };
};

export default Cell;