import { useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";

export default function reducer(state, { type, payload }) {


  
  switch (type) {
    case "handleTitleChange": {
      return {
        ...state,
        title: payload,
      };
    }
    case "handleContentChange": {
      return {
        ...state,
        content: payload,
      };
    }
    case "onAddClick": {
      if (state.title.trim() === "") {
        return state;
      }

      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: state.title,
            content: state.content,
            id: uuid(),
            isPinned: false,
            isArchived: false,
            isDeletePermanent: false,
            isImportant: false,
          },
        ],
        title: "", // Reset title
        content: "", // Reset content
      };
    }

    case "HandlePin": {
      const noteToPin = state.notes.find((note) => note.id === payload.id);

      if (!noteToPin) return state;

      const updatedNote = { ...noteToPin, isPinned: true };

      return {
        ...state,
        pinnedNotes: [...state.pinnedNotes, updatedNote],
        notes: state.notes.filter((note) => note.id !== payload.id),
      };
    }

    case "HandleUnpin": {
      const noteToUnpin = state.pinnedNotes.find(
        (note) => note.id === payload.id
      );

      if (!noteToUnpin) return state;

      const updatedNote = { ...noteToUnpin, isPinned: false };

      return {
        ...state,
        notes: [...state.notes, updatedNote],
        pinnedNotes: state.pinnedNotes.filter((note) => note.id !== payload.id),
      };
    }

    case "HandleArchive": {
      const noteInNotes = state.notes.find((note) => note.id === payload.id);
      const noteInPinned = state.pinnedNotes.find(
        (note) => note.id === payload.id
      );

      const noteToArchive = noteInNotes || noteInPinned;
      if (!noteToArchive) return state;
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload.id),
        pinnedNotes: state.pinnedNotes.filter((note) => note.id !== payload.id),
        archived: [...state.archived, { ...noteToArchive, isArchived: true }],
      };
    }

    case "HandleUnarchive": {
      const noteToUnarchive = state.archived.find(
        (note) => note.id === payload.id
      );

      if (!noteToUnarchive) return state;

      return {
        ...state,
        archived: state.archived.filter((note) => note.id !== payload.id),
        notes: [
          ...state.notes,
          { ...noteToUnarchive, isPinned: false, isArchived: false },
        ],
      };
    }

    case "HandleBin": {
      const noteInNotes = state.notes.find((note) => note.id === payload.id);
      const noteInImportant = state.important.find((note) => note.id === payload.id);
      const noteInPinned = state.pinnedNotes.find(
        (note) => note.id === payload.id
      );
      const noteInArchived = state.archived.find(
        (note) => note.id === payload.id
      );
      const noteInBin = state.bin.find((note) => note.id === payload.id);

      const noteToBin =
        noteInNotes || noteInPinned || noteInArchived || noteInBin || noteInImportant;
      if (!noteToBin) return state;

      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload.id),
        pinnedNotes: state.pinnedNotes.filter((note) => note.id !== payload.id),
        archived: state.archived.filter((note) => note.id !== payload.id),
        important: state.important.filter((note) => note.id !== payload.id),
        bin: [...state.bin, { ...noteToBin, isDeletePermanent: true,isImportant: false }],
      };
    }

    case "HandleDeletePermanent": {
      const noteToDelete = state.bin.find((note) => note.id === payload.id);

      if (!noteToDelete) return state;

      return {
        ...state,
        bin: state.bin.filter((note) => note.id !== payload.id),
      };
    }

    case "HandleRestore": {
      const noteToRestore = state.bin.find((note) => note.id === payload.id);

      if (!noteToRestore) return state;

      return {
        ...state,
        bin: state.bin.filter((note) => note.id !== payload.id),
        notes: [
          ...state.notes,
          {
            ...noteToRestore,
            isDeletePermanent: false,
            isPinned: false,
            isArchived: false,
            isImportant:false
          },
        ],
      };
    }

    case "HandleImportant": {
      const noteInNotes = state.notes.find((note) => note.id === payload.id);
      const noteInPinned = state.pinnedNotes.find(
        (note) => note.id === payload.id
      );
      const noteInArchived = state.archived.find(
        (note) => note.id === payload.id
      );
      const noteInBin = state.bin.find((note) => note.id === payload.id);

      const noteToImportant =
        noteInNotes || noteInPinned || noteInArchived || noteInBin;

      if (!noteToImportant) return state;

      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload.id),
        pinnedNotes: state.pinnedNotes.filter((note) => note.id !== payload.id),
        archived: state.archived.filter((note) => note.id !== payload.id),
        bin: state.bin.filter((note) => note.id !== payload.id),
        important: [
          ...state.important,
          {
            ...noteToImportant,
            isDeletePermanent: false,
            isPinned: false,
            isArchived: false,
            isImportant: true,
          },
        ],
      };
    }

    case "HandleUnimportant": {
      const noteToUnimportant = state.important.find(
        (note) => note.id === payload.id
      );

      if (!noteToUnimportant) return state;

      return {
        ...state,
        important: state.important.filter((note) => note.id !== payload.id),
        notes: [
          ...state.notes,
          {
            ...noteToUnimportant,
            isDeletePermanent: false,
            isPinned: false,
            isArchived: false,
            isImportant: false,
          },
        ],
      };
    }

    default:
      return state;
  }
}
