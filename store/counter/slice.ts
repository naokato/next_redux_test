import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sleep, error } from '../../lib/sleep';

// typeの定義
export type CounterState = {
  value: number,
  message: string
};

// 初期値の定義
const initialState: CounterState = { value: 0, message:'' };

// action creator
export const counterAsyncIncrement = createAsyncThunk(
  'COUNTER/ASYNC_INCREMENT',
  async (data) => {
    await sleep();
    // await error();
    return 10;
  }
)

export const counterSlice = createSlice({
  // 名前
  name: "COUNTER",

  // 初期値
  initialState,

  // reducer
  reducers: {
    INCREMENT(state) {
      state.value++;
    },
    DECREMENT(state) {
      state.value--;
    },
    RESET(state) {
      return { value: 0 }; 
    },
    HELLO: {
      reducer: (state, action) => {
        return {...state, message: action.payload}
      },
      prepare: (name) => {
        return {
          payload: `hello, ${name}!`
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(counterAsyncIncrement.fulfilled, (state, action) =>  {
        return {...state, 
          value: state.value + action.payload,
          message: ''
        }
      })
      .addCase(counterAsyncIncrement.pending, (state, action) =>  {
        state.message = '### loading... ###'
      })
      .addCase(counterAsyncIncrement.rejected, (state, action) =>  {
        state.message = '### error... ###'
      })
  }
});
