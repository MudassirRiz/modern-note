import React from 'react'
import Status from './Status'
import Set1 from './Set1'
import { CirclePlus } from 'lucide-react'
import TodoList from './TodoList'

const Container = ({openForm, data, setData, deleteBtn, statusBtnClick, date, edit, editNote, index}) => {
  return (
    <>
    
    <div className='w-9/10 h-9/10 flex  flex-col  items-center  rounded-sm'>
    <Status statusBtnClick={statusBtnClick}/>
    <Set1 openForm={openForm}/>
    <TodoList  data={data} setData={setData} deleteBtn={deleteBtn} date={date} edit={edit} editNote={editNote} index={index}/>


    </div>
    
    </>
  )
}

export default Container