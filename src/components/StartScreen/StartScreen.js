import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './startscreen.css';

// StartScreen

export default class StartScreen extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      userName2: ''
    };

  };

  setUserName(event) {
    this.setState({
        userName: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <div className="modal-dialog cascading-modal" role="document">
          <div className="modal-content">

              <div className="modal-header">
                  <h4 className="title text-center">Добро пожаловать!</h4>
              </div>

              <div className="modal-body">
                <div className='row mt-4'>
                  <div className='col-6'>
                    <label htmlFor="defaultFormNameModalEx">Имя игрока № 1</label>
                    <input type="text" id="defaultFormNameModalEx" className="form-control form-control-sm" value={this.state.userName1} onChange={this.setUserName.bind(this)}></input>
                    <br></br>
                  </div>
                  <div className='col-6'>
                    <div className='red'></div>
                  </div>
                </div>
                
                <div className='row mt-4'>
                  <div className='col-6'>
                    <label htmlFor="defaultFormNameModalEx">Имя игрока № 2</label>
                    <input type="text" id="defaultFormNameModalEx" className="form-control form-control-sm" value={this.state.userName2} onChange={this.setUserName.bind(this)}></input>
                    <br></br>
                  </div>
                  <div className='col-6'>
                    <div className='blue'></div>
                  </div>
                </div>

                <div className="text-center mt-4 mb-2">
                  <Link to={{
                    pathname: '/board',
                    state: {fromStartScreen: true, userName: this.state.userName}
                    }}>
                    <button className="btn btn-primary">Новая игра</button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
      </div>
    );
  }
}