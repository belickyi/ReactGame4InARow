import React, { Component } from 'react';
import '../Cell/Cell.css';

// Gets array div element and render

export default class Cell extends Component {

  addCell() {
    this.props.onPress(this.props.x)
  }

  render() {

    return (
      <div className={`cell ${'cell-dark'} id-cell='${this.props.y}'`} key={`cell-${this.props.y}`} onClick={this.addCell.bind(this)}>
        {this.props.cell}
      </div>);

  }
  

}