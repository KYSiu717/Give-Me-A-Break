import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

// const formattedTime = sec => {
//   '0' +
//   Math.floor(sec / (60 * 60)) +
//   ':' + // Hours
//   ('0' + Math.floor(sec / 60)) +
//   ':' + // Minutes
//     ('0' + (sec % 60)).slice(-2); // Seconds
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date().toLocaleTimeString(),
      startTime: 0
    };
    this.decrementer = null;
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tickTock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tickTock() {
    this.setState({
      currentDate: new Date().toLocaleTimeString()
    });
  }

  // startTimer() {
  //   this.decrementer = setInterval(
  //     () =>
  //       this.setState({
  //         startTime: this.state.startTime - 1
  //       }),
  //     1000
  //   );
  // }
  // stopTimer() {
  //   clearInterval();
  // }

  render() {
    let { currentDate } = this.state;
    return (
      <div className="app">
        <h1 className="title">Give me a Break</h1>
        <h3 className="currentTime">It is currently {currentDate}</h3>
        <div>
          {/* Sets the break time */}
          <label className="labels center">
            How long until your next break?
          </label>

          <br />
          <input
            onKeyPress
            placeholder="Enter time in minutes"
            className="inputFields center"
            type="text"
          />
          {/* Creates the timer presentational component */}
          <div onClick className="center timer">
            <div className>
              <h3 className="labels">Timer</h3>
              <p ref="timer" className="timeView">
                00:00:00
              </p>
            </div>
          </div>
          <br />
          <button className="timerButton">Start/Stop</button>
          <button className="timerButton">Reset Timer</button>
        </div>
      </div>
    );
  }
}

// export default App;
export default hot(module)(App);
