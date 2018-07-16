import React from 'react';
import '../Cell/Cell.css';

// Gets array div element and render

export default function Cell(props) {
  
  return (
    <div className='row justify-content-between' >
      {props.column}
    </div>);

}