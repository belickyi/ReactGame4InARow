import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './startscreen.css';

// StartScreen

export default class StartScreen extends Component {
  constructor() {
    super();

    this.state = {
      userName1: '',
      userName2: ''
    };

    this.setUserName1 = this.setUserName1.bind(this);
    this.setUserName2 = this.setUserName2.bind(this);

  };

  setUserName1(event) {
    this.setState({
      userName1: event.target.value
    })
  };

  setUserName2(event) {
    this.setState({
      userName2: event.target.value
    })
  };
  
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
                    <input type="text" id="defaultFormNameModalEx" className="form-control form-control-sm" value={this.state.userName1} onChange={this.setUserName1} required></input>
                    <br></br>
                  </div>
                  <div className='col-6'>
                    <div className='red'></div>
                  </div>
                </div>
                
                <div className='row mt-4'>
                  <div className='col-6'>
                    <label htmlFor="defaultFormNameModalEx">Имя игрока № 2</label>
                    <input type="text" id="defaultFormNameModalEx" className="form-control form-control-sm" value={this.state.userName2} onChange={this.setUserName2} required></input>
                    <br></br>
                  </div>
                  <div className='col-6'>
                    <div className='blue'></div>
                  </div>
                </div>

                <div className="text-center mt-4 mb-2">
                  <Link to={{
                    pathname: '/board',
                    state: {
                      fromStartScreen: true, 
                      userName1: this.state.userName1, 
                      userName2: this.state.userName2
                    }
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