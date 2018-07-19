import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Timer from './timer.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clock: new Date().toLocaleTimeString(),
      inputTime: 0,
      workTimerOn: false,
      breakTime: false
    };
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.submitWorkTime = this.submitWorkTime.bind(this);
  }
  //-------Current Time Functionality---------//
  componentDidMount() {
    this.clock = setInterval(() => this.tickTock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clock);
  }
  tickTock() {
    this.setState({
      clock: new Date().toLocaleTimeString()
    });
  }
  //------------------------------------------//
  //-------Standard Timer functionality-------//
  startStopTimer() {
    if (this.state.workTimerOn === false && this.state.inputTime !== 0) {
      this.workTimerOn = setInterval(() => {
        this.setState({
          workTimerOn: this.state.inputTime > 0 ? true : false,
          inputTime: this.state.inputTime > 0 ? this.state.inputTime - 1 : 0,
          breakTime: this.state.inputTime === 0 ? true : false
        });
      }, 1000);
    }
    if (this.state.workTimerOn === true) {
      clearInterval(this.workTimerOn);
      this.setState({
        workTimerOn: false
      });
    }
  }
  resetTimer() {
    clearInterval(this.workTimerOn);
    this.setState({
      breakTime: false,
      workTimerOn: false,
      inputTime: 0
    });
  }
  submitWorkTime(e) {
    if (e.key == 'Enter') {
      this.setState({ inputTime: e.target.value * 60 });
    }
  }
  //------------------------------------------//

  render() {
    let { clock } = this.state;
    return (
      <div className="app">
        {this.state.breakTime !== true ? (
          <h1 className="title">Give me a Break</h1>
        ) : (
          <h1 className="title">It's Brrrrr-eak Time</h1>
        )}

        <h3 className="currentTime">It is currently {clock}</h3>
        {/* currentDate is being dynamically updated */}
        <div>
          {/* Sets the break time */}
          {this.state.breakTime !== true ? (
            <label className="labels center">
              How long until your next break?
            </label>
          ) : (
            <label className="labels center">
              How long should your break last?
            </label>
          )}

          <br />

          <input
            onKeyPress={this.submitWorkTime}
            placeholder="Enter time in minutes"
            className="inputFields center"
            type="text"
          />
          {/* Creates the timer presentational component */}
          <Timer
            {...this.state}
            startStopTimer={this.startStopTimer}
            resetTimer={this.resetTimer}
          />

          {/* <Timer timer={this.state} /> This will also pass the whole state down to the child component Timer. You could also use individual ones like timer={this.inputTime} */}
        </div>
      </div>
    );
  }
}

// export default App;
export default hot(module)(App);
