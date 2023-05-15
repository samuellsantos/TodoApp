/* import {BsPencilFill} from 'react-icons/bs' */
import {IoIosCloseCircle} from 'react-icons/io'
import { removeTodo } from '../features/Todo/Todo-slice';
import {useDispatch} from 'react-redux'

export interface TodoProps {
  text: string;
  id: number;
}

export const Todo = ({text, id}: TodoProps) => {
  const dispatch = useDispatch()

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id))
  }

  
  return (
    <div className='max-w-[600px] bg-white text-black border-2 border-black py-4 px-3 font-bold drop-shadow-sm mt-4 rounded flex items-center justify-between'>
      {text}
      <div className='bg-black rounded-full cursor-pointer hover:bg-black/80 ' onClick={handleRemoveTodo}>
        <IoIosCloseCircle color={'#fff'} size={40}/>
      </div>
    </div>

  )
}
