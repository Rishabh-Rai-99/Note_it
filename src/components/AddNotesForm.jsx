import React, { useContext, useEffect } from 'react'
import { useNotes } from '../context/notesContext'
import {motion} from 'framer-motion'
import { AnimationContext } from '../context/animationContext';


const AddNotesForm = () => {

    const hasAnimated = useContext(AnimationContext);
    
      const shouldAnimate = !hasAnimated.current;
    
      useEffect(() => {
        hasAnimated.current = true;
      }, []);

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
    <motion.div 
    initial={shouldAnimate?{ y: -200, opacity: 0 }:false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
       className='shadow-xl w-full mx-2 sm:mx-15 z-20 mt-10 rounded-xl p-3 flex flex-col bg-white dark:bg-[#2a2a2a] 
dark:text-[#e5e5e5]'>
        <input type="text" value={state.title} onChange={(e)=>handleTitleChange(e)} placeholder='Enter Title...' className='placeholder-[#9ca3af] dark:placeholder:text-[#a3a3a3] text-xl sm:text-2xl font-bold outline-none rounded-lg px-3 py-1 w-full'/>
        <div className='relative flex'>
        <textarea name="" id=""  value={state.content} onChange={(e)=>handleContentChange(e)}  placeholder='Enter Content...' className='placeholder-[#9ca3af] dark:placeholder:text-[#a3a3a3] font-semibold text-md sm:text-lg outline-none w-full rounded-lg px-3 py-1 min-h-[20vh]'></textarea>
        <button disabled={!state.title && !state.content} onClick={onAddClick} className='absolute right-5 bottom-0 cursor-pointer text-lg sm:text-xl text-white rounded-xl py-1 sm:py-2 font-semibold px-2 sm:px-4 bg-[linear-gradient(to_right,rgba(52,211,153,0.9),rgba(20,184,166,0.9))]'>+ Add Note</button>
        </div>
    </motion.div>
  )
}

export default AddNotesForm
