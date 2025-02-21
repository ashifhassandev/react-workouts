import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter'>
      <h1>{count}</h1>
      <button onClick={incrementCounter} className='btn btn-primary'>+</button>
      <button onClick={decrementCounter} className='btn btn-primary'>-</button>
    </div>
  );
};

export default App;