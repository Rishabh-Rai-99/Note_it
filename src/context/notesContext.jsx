import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import reducer from '../reducers/NotesReducer';
import useLocalStorage from '../hooks/useLocalStorage';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {

  const [menuActive, setMenuActive] = useState(false);
  const {setItem,getItem} = useLocalStorage("allNotes")

  const initialState = getItem() || {
        title: '',
        content:'',
        notes:[],
        pinnedNotes:[],
        archived:[],
        bin:[],
        important:[]
    } 

    const [state,dispatch] = useReducer(reducer,initialState);

    
    useEffect(()=>{
      setItem(state)
    },[state])

  return (
    <NotesContext.Provider value={{state,dispatch,setMenuActive,menuActive}}>
      {children}
    </NotesContext.Provider>
  );
};

// 3. Custom hook to use the context
export const useNotes = () => {
  const context = useContext(NotesContext);
  return context;
};
