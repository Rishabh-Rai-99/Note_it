import React from 'react'
import Navbar from '../components/Navbar';
import { useNotes } from '../context/notesContext';
import NotesCard from '../components/NotesCard';
import Sidebar from '../components/Sidebar';

const Important = () => {
   const {state,menuActive,setMenuActive} = useNotes();
  return (
    <>
      <div className="p-5 bg-[#f7f8fa] dark:bg-[#1a1a1a] text-[#111827] dark:text-[#e5e7eb] min-h-[100vh]">
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>
      <div className="min-h-full flex w-full">
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive}/>

        <main className="w-full">
            <div className='pt-10 text-2xl text-center font-semibold'>
            <h1>Important Notes: </h1>
            </div>

            <div className="flex mx-6 flex-wrap gap-4 mb-5">
          {state.important.length > 0 && state.important.map((card) => (
                    <NotesCard
                      key={card.id}
                      title={card.title}
                      id={card.id}
                      content={card.content}
                      isArchived={card.isArchived}
                      isDeletePermanent={card.isDeletePermanent}
                      isImportant={card.isImportant}
                    />
                ))}
            </div>
        </main>
      </div>
      </div>
    </>
  )
}

export default Important