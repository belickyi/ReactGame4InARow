import React from 'react';
// Components
import Column from '../Column/Column'

// Gets table array, turn matrix

export default function Table(props) {

  const turnedArr = [];

  // Turn array
  for (let i = 0; i < props.data.grid[0].length; i++) {
    let col = props.data.grid.map(column => column[i])
    turnedArr.push(col);
  };
  
  return (
    <Column turnedArr={turnedArr} onPress={props.onPress} />
  );

}