import React from 'react'
import { useNotes } from '../context/notesContext'


const AddNotesForm = () => {

    const {state,dispatch} = useNotes();

    const handleTitleChange = (e)=>{
        dispatch({
            type:'handleTitleChange',
            payload:e.target.value
        })
    }
    const handleContentChange = (e)=>{
        dispatch({
            type:'handleContentChange',
            payload:e.target.value
        })
    }

    const onAddClick = ()=>{
        dispatch({
            type:'onAddClick'
        })
    }

  return (
    <div className='border w-78 mt-10 rounded-lg p-1 flex flex-col gap-3'>
        <input type="text" value={state.title} onChange={(e)=>handleTitleChange(e)} placeholder='Enter Title' className='border rounded-lg px-3 py-1 w-full'/>
        <div className='relative flex'>
        <textarea name="" id=""  value={state.content} onChange={(e)=>handleContentChange(e)}  placeholder='Enter Content' className='border w-full rounded-lg px-3 py-1 '></textarea>
        <button disabled={!state.title && !state.content} onClick={onAddClick} className='absolute right-0 bottom-0 cursor-pointer text-4xl text-[#a3dd84] w-10 h-10'>+</button>
        </div>
    </div>
  )
}

export default AddNotesForm