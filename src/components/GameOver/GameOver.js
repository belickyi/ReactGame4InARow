import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// StartScreen

export default class GameOver extends Component {

  render() {
    console.log(this.state)
    return (
        <div>
            <div>Game over</div>
            <div></div>

            <Link to={{
                pathname: '/',
                state: {fromStartScreen: true}
                }}>
                <div className='btn-lg btn-primary'>to main page</div>
            </Link>
        </div>
    );

  }
}