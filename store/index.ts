import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"; 
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { CounterState, counterSlice } from './counter/slice'

export type RootState = {
  counter: CounterState
};

// redux-persist 用設定
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter']
};

// configureStore を使う場合は、combineReducers は通常必要無いが、
// persistedReducer, persistStore を利用するのに必要となる
const reducers = combineReducers({
  counter: counterSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
