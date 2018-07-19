import React from 'react';
// import Button from './button.jsx'
// const formattedTime = function(sec)

const formattedTime = sec => {
  let hours = Math.floor(sec / (60 * 60));
  let minutes = Math.floor((sec % (60 * 60)) / 60);
  let seconds = Math.floor(sec % 60);

  if (hours < 10 && hours !== 0) {
    hours = '0' + hours;
  } else if (hours === 0) {
    hours = '00';
  }
  if (minutes < 10 && minutes !== 0) {
    minutes = '0' + minutes;
  } else if (minutes === 0) {
    minutes = '00';
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
};

const Timer = props => {
  const { inputTime, startStopTimer, resetTimer, workTimerOn } = props;
  // Upon passing down your properties you can destructure like above or else you would have to acces it through props.whateverName. In this case it would be props.timer. So for instance the above would become
  //const { inputTime, onOffTimer } = props.timer;

  return (
    <div className="center timer">
      <div>
        <h3 className="labels">Timer</h3>
        <p ref="timer" className="timeView">
          {formattedTime(inputTime)}
        </p>
        {/* Button Nation over here */}
        <div>
          <button className="timerButton" onClick={startStopTimer}>
            {workTimerOn === true && inputTime !== 0 ? 'Stop' : 'Start'}
          </button>
          {inputTime !== 0 ? (
            <button className="timerButton" onClick={resetTimer}>
              Reset
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Timer;
