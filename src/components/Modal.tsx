import {IoIosCloseCircle} from 'react-icons/io'
import {motion} from 'framer-motion'

export const Modal = () => {
  return (
    <motion.div className="w-96 h-24 bg-black rounded text-white flex items-center px-8 gap-2 absolute top-0 left-[10%] md:left-[40%]"
    initial={{ y: -1000, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', damping: 15, stiffness: 100 }}>
      <IoIosCloseCircle size={25}/>
      <p>
        It's not possible to add a null todo.
      </p> 
    </motion.div>
  )
}
