import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice, counterAsyncIncrement } from "../store/counter/slice";
import { NextPage } from "next";
import { persistor } from '../store'
import { useForm } from 'react-hook-form'

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const counterSelector = useSelector((state: RootState) => state.counter);
  const { INCREMENT, DECREMENT, RESET, HELLO } = counterSlice.actions;
  const { watch, register, trigger, handleSubmit, errors } = useForm(); 
  const [ submitError, setSubmitError] = useState();

  const form = watch();
  const onSubmit = handleSubmit(
    ({ name }) => {
      setSubmitError();
      dispatch(HELLO(form.name))
    },
    ((errors) => {
      setSubmitError('submit error!!!');
      setTimeout(() => {
        setSubmitError();
      }, 1000)
    })
  )

  const isSubmitEnabled = () => {
    if (!form.name) {
      return false;
    }
    if (errors.name) {
      return false;
    }
    return true;
  }

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
        onClick={onSubmit}
        disabled={!isSubmitEnabled()}
      >
        Hello 
      </button>

      <textarea
        name='name'
        onChange={() => trigger("name")}
        ref={register({
          required: "name is required!",
          maxLength: {
            value: 10,
            message: 'too long name!' 
          }
        })}
      >
      </textarea>
      {errors.name && <p>{errors.name.message}</p>}
      {submitError && <p><font color="red">{submitError}</font></p>}
    </div>
  );
};

export default Home;
