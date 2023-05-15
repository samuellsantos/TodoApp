import React from 'react';
import { AddTodoInput } from './AddTodoInput';
import { Todo } from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { motion } from 'framer-motion';
import { addTodo } from '../features/Todo/Todo-slice';
import { TodoProps } from './Todo';
import '../scrollbar.css'

export const Container = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const storedTodos = window.localStorage.getItem('todos');

    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      parsedTodos.forEach((todo: TodoProps) => dispatch(addTodo(todo)));
    }

    setLoading(false);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full h-screen bg-white flex items-center flex-col'>
      <h1 className='font-dansingScript text-6xl md:text-8xl mt-24 mb-8'>Todo App</h1>

      <div>
        <AddTodoInput />
        <div className='h-[40rem] overflow-y-auto overflow-x-hidden'>
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 1000, opacity: 0 }}
              transition={{ type: 'spring', damping: 10, stiffness: 100 }}
            >
              <Todo text={todo.text} id={todo.id} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
