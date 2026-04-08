import React from 'react'
import { Pen } from 'lucide-react'
import { Trash } from 'lucide-react'
import { ClipboardClock } from 'lucide-react'
const TodoItem = ({item, index, deleteBtn, date, edit, editNote}) => {
  return (
    <>
    <div value={item} className='w-98/100 h-27 mt-2 bg-gray-200 font-black flex justify-between items-center shadow-md hover:scale-[1.02] transition duration-200'>
    <div className='h-25 w-160 flex items-center px-10 '> <h1 className='font-medium '>{item}</h1></div>
    <div className='h-25 w-70 flex items-center justify-center  gap-5 font-light'><ClipboardClock strokeWidth={1.5} /><h2 >{date}</h2></div>
    <div className='h-25 w-50 flex items-center justify-center gap-5'>
        <Pen strokeWidth={1.5} onClick={() => {
 /*  console.log("value:", index); */
  editNote(index);
}} className='cursor-pointer hover:scale-110 transition' />
        <Trash strokeWidth={1.5} onClick={()=>{deleteBtn(index)}} className='cursor-pointer hover:scale-110 transition'  color='red' />
    </div>
    
    
    </div>
    
    
    </>
  )
}

export default TodoItem