import React from "react";
import { useNotes } from "../context/notesContext";

const NotesCard = ({
  title,
  content,
  id,
  isPinned,
  isArchived,
  isDeletePermanent,
  isImportant
}) => {
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
    <div className="border max-h-80  w-full sm:w-78 mt-10 rounded-lg p-1 flex flex-col gap-1">
      <div className="flex  justify-between border-b-black border-b-[1px]">
        <div className="overflow-y-auto max-h-40">{title}</div>
        {isArchived || isDeletePermanent || isImportant ? null : (
          <div className="relative group">
              <span
            onClick={HandlePin}
            className="cursor-pointer material-symbols-outlined"
          >
            {isPinned ? "Keep_off" : "Keep"}
          </span>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {isPinned ? "Unpin" : "Pin"}
              </div>
            </div>
        )}
      </div>
      <div className="overflow-y-auto">{content}</div>
      <div className="flex justify-between gap-3 ">
        {isImportant && <span className="bg-zinc-300 px-2 flex items-center text-center  py-1 rounded-full">Important</span>}
        {!isImportant && <div>
          <div className="relative group">
            <span
              onClick={HandleImportant}
              className="cursor-pointer material-symbols-outlined"
            >
              {isImportant ? "bookmark_remove" : "bookmark_star"}
            </span>

            <div className="absolute text-center -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {isImportant ? "mark unimportant" : "mark important"}
            </div>
          </div>{" "}
        </div>}
        <div className="flex">
          {isImportant && <div>
          <div className="relative group">
            <span
              onClick={HandleImportant}
              className="cursor-pointer material-symbols-outlined"
            >
              {isImportant ? "bookmark_remove" : "bookmark_star"}
            </span>

            <div className="absolute text-center -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {isImportant ? "mark unimportant" : "mark important"}
            </div>
          </div>{" "}
        </div>}
          {isDeletePermanent || isImportant ? null : (
            <div className="relative group">
              <span
                onClick={HandleArchive}
                className="cursor-pointer material-symbols-outlined"
              >
                {isArchived ? "unarchive" : "archive"}
              </span>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {isArchived ? "Unarchive" : "Archive"}
              </div>
            </div>
          )}
          {isDeletePermanent && (
              <div className="relative group">
                <span
              onClick={HandleRestore}
              className="cursor-pointer material-symbols-outlined"
            >
              recycling
            </span>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {"Restore"}
              </div>
            </div>
          )}
            <div className="relative group">
              <span
            onClick={HandleBin}
            className="cursor-pointer material-symbols-outlined"
          >
            {isDeletePermanent ? "delete_forever" : "delete"}
          </span>

              <div className="absolute text-center -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {isDeletePermanent ? "Delete Permanent" : "Bin"}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
