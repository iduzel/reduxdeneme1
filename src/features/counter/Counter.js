import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <section>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
    </section>
  )
}

export default Counter