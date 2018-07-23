import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// StartScreen

export default class GameOver extends Component {

  render() {

    return (
        <div>
            <div>Game over</div>
            <div>Player 1 wins</div>

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