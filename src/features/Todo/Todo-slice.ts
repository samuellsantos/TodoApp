import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Todo {
  id: number;
  text: string;
}

interface todoState {
  todos: Todo[];
}

const initialState:todoState = {
  todos: [
    
  ]
}

  

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
   addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
   },
   removeTodo:(state, action: PayloadAction<number>) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload)
 }
 }
 })

 export const {addTodo, removeTodo} = todoSlice.actions;
 export const reducerTodo = todoSlice.reducer;