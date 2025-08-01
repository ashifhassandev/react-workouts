import { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const padZero = (number) => (number < 10 ? "0" : "") + number;

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
  };

  return (
    <div className="main">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default App;