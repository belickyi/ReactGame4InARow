import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// StartScreen

export default class GameOver extends Component {

  render() {
    console.log(this.state)
    return (
        <div className='col-5 mt-5 container'>
            <form className="text-center border border-light p-5">
                <p className="h4 mb-4">Game over</p>
                <div className="d-flex justify-content-around">
                    <div>Игрок: победил!</div>
                </div>
                <Link to={{
                    pathname: '/',
                    state: {fromStartScreen: true}
                    }}>
                    <button className="btn btn-info btn-block my-4" type="submit">На главную</button>
                </Link>
            </form>
        </div>
    );

  }
}