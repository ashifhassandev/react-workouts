import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      clearInterval(intervalIdRef.current); // prevent multiple intervals

      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  const start = () => {
    if (isRunning) return;

    startTimeRef.current = Date.now() - elapsedTime;
    setIsRunning(true);
  };

  const stop = () => setIsRunning(false);

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const padZero = (number) => String(number).padStart(2, "0");

  const formatTime = () => {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
  };

  return (
    <div className="main">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
      <div className="btn-section">
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;