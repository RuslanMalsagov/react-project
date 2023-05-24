import React, { useState } from 'react';
import style from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className={style.counter}>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
