// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './counter/TodoSlice'

export const store = configureStore({
  reducer: todoReducer
});