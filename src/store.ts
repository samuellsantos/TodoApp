import {configureStore} from '@reduxjs/toolkit'
import { reducerTodo } from './features/Todo/Todo-slice'
export const store = configureStore({
  reducer: {
   todo: reducerTodo
  }
})

export type RootState = ReturnType<typeof store.getState>