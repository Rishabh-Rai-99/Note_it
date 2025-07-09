import React  from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddNotesForm from "../components/AddNotesForm";
import NotesCard from "../components/NotesCard";
import { useNotes } from "../context/notesContext";

const Home = () => {
  const { state,menuActive,setMenuActive } = useNotes();

  return (
    <>
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>
      <div className="bg-[#f7f4f4] min-h-full flex w-full">
        <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />

        <main className="min-h-[91vh] w-full">
          <div className="flex justify-center">
            <AddNotesForm />
          </div>

          {state.pinnedNotes.length > 0 && (
            <>
              <div className="mx-3 sm:mx-10 mt-5">
                <h2 className="text-xl">Pinned Notes:</h2>
                <div className="flex flex-wrap gap-4 mb-5">
                  {state.pinnedNotes.map((card) => (
                    <NotesCard
                      title={card.title}
                      id={card.id}
                      content={card.content}
                      isPinned ={card.isPinned}
                      isArchived ={card.isArchived}
                      isDeletePermanent={card.isDeletePermanent}
                      isImportant={card.isImportant}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="mx-3 sm:mx-10 mt-5">
            {state.pinnedNotes.length > 0 && (
              <h2 className="text-xl">Other Notes:</h2>
            )}
            <div className=" flex flex-wrap gap-4 mb-5">
              {state.notes.map((card) => (
                <NotesCard
                  key={card.id}
                  title={card.title}
                  id={card.id}
                  content={card.content}
                  isPinned ={card.isPinned}
                  isArchived ={card.isArchived}
                  isDeletePermanent={card.isDeletePermanent}
                  isImportant={card.isImportant}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
