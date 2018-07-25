import React, { Component } from 'react';
import '../Cell/Cell.css';

// Gets array div element and render

export default class Cell extends Component {

  addCell() {
    this.props.onPress(this.props.x)
  }

  render() {

    var color;
    if (this.props.cell === 1) {
      color = 'cell-red';
    } else if (this.props.cell === 2) {
      color = 'cell-blue';
    } else {
      color = 'cell-dark';
    }

    return (
      <div className={`cell ${color} id-cell='${this.props.y}'`} key={`cell-${this.props.y}`} onClick={this.addCell.bind(this)}>
        <div className="cellDispleyNone">{this.props.cell}</div>
      </div>);

  }

}