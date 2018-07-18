import React from 'react';
// Components
import Column from '../Column/Column'

// Gets table array

export default function Table(props) {

  return (
    <Column grid={props.grid} onPress={props.onPress} />
  );

}