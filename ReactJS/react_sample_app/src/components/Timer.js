import React, { useState, useRef } from 'react';

const TimerWithRef = () => {
      const [time, setTime] = useState(new Date().toLocaleTimeString());
      const timerRef = useRef(null); // useRef stores timer ID

      const startTimer = () => {
            if (timerRef.current) return; // prevent multiple timers
            timerRef.current = setInterval(() => {
                  setTime(new Date().toLocaleTimeString());
            }, 1000);
      };

      const stopTimer = () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
      };

      return (
            <div>
                  <h2>Time: {time}</h2>
                  <button onClick={startTimer}>Start</button>
                  <button onClick={stopTimer}>Stop</button>
            </div>
      );
};

export default TimerWithRef;
