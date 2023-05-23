import React, { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className='counter'>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
