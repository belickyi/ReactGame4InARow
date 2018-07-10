import React from 'react'; 

function Title(props) {
  return <div>
    <h1>Hello Anton!!! Date is {new Date().toDateString()}</h1>
    <button onClick={props.press}>Click heare</button>
  </div>
}

export default Title;