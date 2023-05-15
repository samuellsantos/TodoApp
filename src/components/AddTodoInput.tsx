import React from 'react'
import { addTodo } from '../features/Todo/Todo-slice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import {SiAddthis} from 'react-icons/si'
import { Modal } from './Modal'
import {motion} from 'framer-motion'

export const AddTodoInput = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [modal, setModal] = React.useState(false)
  const todos = useSelector((state:RootState) => state.todo.todos)
  const dispatch = useDispatch()

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = event.target.value
    setInputValue(value)
  }


  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if(inputValue !== '' && inputValue.length < 100) {
      const newTodo = {
        id: (todos.length + 1),
        text: inputValue
      }
      dispatch(addTodo(newTodo))
      setInputValue('')
    } else {
      setModal(true)
      setTimeout(() => {
        setModal(false)
      }, 2000);
    }
  }

  return (
    <>
    <div className='text-white'>
    {modal && <Modal />}
      <div className='relative flex items-center justify-center gap-x-4 w-full'>
      <span className='text-white bg-black p-1 rounded absolute right-16 font-bold'>
        {inputValue.length} / 80
      </span>
      <input
      type="text" 
      onChange={handleInputValue} value={inputValue} 
      onKeyDown={handleKeyDown}
      autoFocus
      maxLength={80}
      placeholder='Type your todo here...'
      className='text-black w-[300px] md:w-[600px] py-3 px-4 pr-16 rounded border-2 border-black'/>
      <motion.button onClick={handleAddTodo} 
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%"
      }} >
        <SiAddthis size={40} color={'#000'}/>
      </motion.button>
      </div>
    </div>
    </>
  )
}
