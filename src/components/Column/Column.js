import React from 'react';
// Components
import Cell from '../Cell/Cell'

// Gets column array

export default function Column(props) {
  
  var column = props.turnedArr.map((turnedArr, i) => {
    return (
      <div className={`'col-1' id-col='${i}'`} key={`column-${i}`}>
        {turnedArr.map((cell, i) => <div onClick={props.onPress} className={`cell id-cell='${i}'`} key={`cell-${i}`}>{cell}</div>)}
      </div>);
  })

  return (
    <Cell column = {column} />
  );

}

// export default class Column extends Component {

//   fuck() {
//     this.props.onPress('hi');
//   }

//   render() {
//     var column = this.props.turnedArr.map((turnedArr, i) => {
//       return (
//         <div className={`'col-1' id-col='${i}'`} key={`column-${i}`}>
//           {turnedArr.map((cell, i) => <div className={`cell id-cell='${i}' onClick=${this.fuck.bind(this)}`} key={`cell-${i}`}>{cell}</div>)}
//         </div>);
//     })
//     return <Cell column = {column} />;
//   }

// }