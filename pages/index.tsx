import { useDispatch, useSelector } from "react-redux";
import { counterSlice, CounterState, store } from "../store/counter/slice";
import { NextPage } from "next";
import { persistor } from '../store'

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const counterSelector = useSelector((state: RootState) => state.counter);
  const { INCREMENT, DECREMENT, RESET, HELLO } = counterSlice.actions;

  return (
    <div>
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
          dispatch(HELLO());
        }}
      >
        Hello 
      </button>
    </div>
  );
};

export default Home;
