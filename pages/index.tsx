import { useDispatch, useSelector } from "react-redux";
import { counterSlice, CounterState, store } from "../store";
import { NextPage } from "next";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const counterSelector = useSelector((state: RootState) => state.counter);
  const { INCREMENT, DECREMENT, HELLO } = counterSlice.actions;

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
          dispatch(HELLO());
        }}
      >
        Hello 
      </button>
    </div>
  );
};

export default Home;
