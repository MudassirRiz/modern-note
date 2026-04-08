import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({data, setData, deleteBtn, date, edit, editNote, index}) => {
  return (
    <div className='w-99/100 h-99/100  items-center flex flex-col'>

      {data.map((item, index)=>(

        <TodoItem key={index}  item={item} deleteBtn={deleteBtn} date={date} edit={edit} editNote={editNote} setData={setData} index={index}/>
      ))}
        
        
    </div>
  )
}

export default TodoList