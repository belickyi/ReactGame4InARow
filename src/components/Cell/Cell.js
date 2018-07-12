import React, { Component } from 'react';

// Gets array div element and render
class Cell extends Component {
  render() {
    return (
    <div className='row justify-content-between'>
      {this.props.cellArr}
    </div>);
  };
};

export default Cell;