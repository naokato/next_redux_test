import { createSlice } from "@reduxjs/toolkit";

// typeの定義
export type CounterState = {
  value: number
};

// 初期値の定義
const initialState: CounterState = { value: 0 };

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
        return {...state, result: action}
      },
      prepare: () => {
        return {
          payload: 'hello!'
        }
      }
    }
  },
});


