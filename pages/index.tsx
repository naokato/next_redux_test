import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice, counterAsyncIncrement } from "../store/counter/slice";
import { NextPage } from "next";
import { persistor } from '../store'

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const counterSelector = useSelector((state: RootState) => state.counter);
  const { INCREMENT, DECREMENT, RESET, HELLO } = counterSlice.actions;
  const [ name, setName ] = useState('default_name'); 

  return (
    <div>
      <div>
        {counterSelector.message}
      </div>
      <p>{counterSelector.value}</p>
      <button
        onClick={() => {
          dispatch(INCREMENT());
        }}
      >
        Increment
      </button>
      
      <button
        onClick={() => {
          dispatch(counterAsyncIncrement());
        }}
      >
        Async Increment
      </button>

      <button
        onClick={() => {
          dispatch(DECREMENT());
        }}
      >
        Decliment
      </button>
      
      <button
        onClick={() => {
          dispatch(RESET())
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          persistor.purge()
        }}
      >
        Purge
      </button>

      <button
        onClick={() => {
          dispatch(HELLO(name));
        }}
      >
        Hello 
      </button>

      <textarea
        value={name}
        onChange = {e => setName(e.target.value)}
      >
      </textarea>
    </div>
  );
};

export default Home;
