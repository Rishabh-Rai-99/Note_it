import React from "react";
import { useNotes } from "../context/notesContext";
import { motion } from "framer-motion"

const NotesCard = ({
  title,
  content,
  id,
  isPinned,
  isArchived,
  isDeletePermanent,
  isImportant,
  variants}) => {
  const { dispatch } = useNotes();  

  const HandlePin = () => {
    dispatch({
      type: isPinned ? "HandleUnpin" : "HandlePin",
      payload: { id },
    });
  };

  const HandleArchive = () => {
    dispatch({
      type: isArchived ? "HandleUnarchive" : "HandleArchive",
      payload: { id },
    });
  };

  const HandleBin = () => {
    dispatch({
      type: isDeletePermanent ? "HandleDeletePermanent" : "HandleBin",
      payload: { id },
    });
  };

  const HandleRestore = () => {
    dispatch({
      type: "HandleRestore",
      payload: { id },
    });
  };

  const HandleImportant = () => {
    dispatch({
      type: isImportant ? "HandleUnimportant" :"HandleImportant",
      payload: { id },
    });
  };

  return (
    <motion.div variants={variants}
    className="bg-white dark:bg-[#242424] 
dark:text-[#f5f5f5]
dark:border-[#3a3a3a]
hover:dark:shadow-lg hover:dark:shadow-black/40
 shadow-lg p-5 cursor-pointer z-40 max-h-80 min-h-50 w-full sm:w-64 mt-10 rounded-xl text-[#1f2937]  flex flex-col gap-1  hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex  justify-between mb-2">
        <div className="overflow-y-auto font-bold text-xl max-h-40">{title}</div>
        {isArchived || isDeletePermanent || isImportant ? null : (
          <div className="relative group flex items-center">
              <span
            onClick={HandlePin}
            className="cursor-pointer hover:text-[#eab308] transition-all duration-100 ease-in-out material-symbols-outlined filled-icon"
          >
            {isPinned ? "Keep_off" : "Keep"}
          </span>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {isPinned ? "Unpin" : "Pin"}
              </div>
            </div>
        )}
      </div>
      <div className="overflow-y-auto h-full">{content}</div>
      <div className="flex justify-between gap-3">
        {isImportant && <span className="bg-zinc-300  dark:bg-zinc-700 px-2 flex items-center text-center  py-1 rounded-full">Important</span>}
        {!isImportant && <div>
          <div className="relative group flex items-center">
            <span
              onClick={HandleImportant}
              className="cursor-pointer material-symbols-outlined transition-all duration-300 ease-in-out hover:text-[#0857ea] filled-icon"
            >
              {isImportant ? "bookmark_remove" : "bookmark_star"}
            </span>

            <div className="absolute text-center -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {isImportant ? "mark unimportant" : "mark important"}
            </div>
          </div>{" "}
        </div>}
        <div className="flex items-center">
          {isImportant && <div>
          <div className="relative group flex items-center">
            <span
              onClick={HandleImportant}
              className="cursor-pointer material-symbols-outlined transition-all duration-300 ease-in-out hover:text-[#08ea9f] filled-icon"
            >
              {isImportant ? "bookmark_remove" : "bookmark_star"}
            </span>

            <div className="absolute text-center -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {isImportant ? "mark unimportant" : "mark important"}
            </div>
          </div>{" "}
        </div>}
          {isDeletePermanent || isImportant ? null : (
            <div className="relative group flex items-center">
              <span
                onClick={HandleArchive}
                className="cursor-pointer material-symbols-outlined transition-all duration-300 ease-in-out hover:text-[#08eab9]  filled-icon"
              >
                {isArchived ? "unarchive" : "archive"}
              </span>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {isArchived ? "Unarchive" : "Archive"}
              </div>
            </div>
          )}
          {isDeletePermanent && (
              <div className="relative group flex items-center">
                <span
              onClick={HandleRestore}
              className="cursor-pointer material-symbols-outlined transition-all duration-300 ease-in-out hover:text-[#08ea22] filled-icon"
            >
              recycling
            </span>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {"Restore"}
              </div>
            </div>
          )}
            <div className="relative group flex items-center">
              <span
            onClick={HandleBin}
            className="cursor-pointer material-symbols-outlined transition-all duration-300 ease-in-out hover:text-[#ea0850] filled-icon"
          >
            {isDeletePermanent ? "delete_forever" : "delete"}
          </span>

              <div className="absolute text-center -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {isDeletePermanent ? "Delete Permanent" : "Bin"}
              </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotesCard;
