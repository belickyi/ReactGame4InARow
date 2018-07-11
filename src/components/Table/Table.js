import React from 'react';
import Column from '../Column/Column'

function Table(props) {
  var column = props.data;
  <Column col = {column[0]}/>
  return <div>hi</div>;
  
}

export default Table;