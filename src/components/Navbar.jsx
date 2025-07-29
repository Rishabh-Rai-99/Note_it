import React from "react";
import logo from "../assets/notes-icon.png";

const Navbar = ({menuActive,setMenuActive}) => {
  return (
      <button onClick={()=>setMenuActive(!menuActive)} className="block sm:hidden">
        <span className="material-symbols-outlined filled-icon text-4xl">{menuActive ? 'close' : 'menu'}</span>
      </button>
  );
};

export default Navbar;
