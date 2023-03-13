import './App.css';

import React from 'react';

import useTimer from './components/useTimer';
import { formatTime } from './components/time';


const App = () => {
  const { timer, isActive, isPaused, start, pause, resume, reset } = useTimer(0)

  return (
    <div className="app">
      <h3>React Stopwatch</h3>
      <div className='stopwatch-card'>
        <p data-testid="time">{formatTime(timer)}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button data-testid="button" onClick={start}>Start</button>
              : (
                isPaused ? <button data-testid="button" onClick={pause}>Pause</button> :
                  <button data-testid="button" onClick={resume}>Resume</button>
              )
          }
          <button data-testid="button" onClick={reset} disabled={!isActive && !isPaused}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
