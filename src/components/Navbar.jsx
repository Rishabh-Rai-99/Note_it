import React from "react";
import logo from "../assets/notes-icon.png";

const Navbar = ({menuActive,setMenuActive}) => {
  return (
    <header className="w-full h-[9vh] justify-between px-4 shadow-xl flex items-center">
      <button onClick={()=>setMenuActive(!menuActive)} className="block sm:hidden">
        <span className="material-symbols-outlined text-4xl">{menuActive ? 'close' : 'menu'}</span>
      </button>

      <div className="flex items-center">
        <img className="sm:w-12 w-8" src={logo} alt="logo" />
        <h2 className="sm:text-4xl text-2xl text-[#a3dd84] font-bold">
          NoteIt
        </h2>
      </div>
    </header>
  );
};

export default Navbar;
