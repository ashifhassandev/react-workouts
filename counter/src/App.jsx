import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount((count) => count + 1);

  const decrementCounter = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  
  const resetCounter = () => setCount(0);

  return (
    <div className='counter'>
      <h1 style={{ marginBottom: '40px' }}>Counter App</h1>
      <h2>{count}</h2>
      <div className='buttons'>
        <button onClick={incrementCounter} className='btn btn-primary'>+</button>
        <button onClick={resetCounter} className='btn btn-primary'>Reset</button>
        <button onClick={decrementCounter} className='btn btn-primary'>-</button>
      </div>
    </div>
  );
};

export default App;