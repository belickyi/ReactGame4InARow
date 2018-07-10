import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function hellowWorld(props) {
    return <button onClick={props.onpress}>Click heare</button>;
}

export default hellowWorld;