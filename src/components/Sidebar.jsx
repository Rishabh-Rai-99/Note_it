import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({menuActive,setMenuActive}) => {

  const HandleClick = ()=>{
      setMenuActive(!menuActive)
  }

  return (
    <aside className={` ${menuActive ?'left-0' :'-left-[100vw]'} sm:left-0 transition-all z-20 w-full sm:w-60 absolute sm:relative min-h-[91vh] bg-[#9ed5ba]`}>
      <div className="flex pt-4 flex-col pl-7 text-xl gap-5 font-semibold">
        <NavLink onClick={HandleClick} className={"flex items-center gap-1"} to={"/"}>
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </NavLink>
        <NavLink onClick={HandleClick} className={"flex items-center gap-1"} to={"/archive"}>
          <span className="material-symbols-outlined">archive</span>
          <span>Archive</span>
        </NavLink>
        <NavLink onClick={HandleClick} className={"flex items-center gap-1"} to={"/important"}>
          <span className="material-symbols-outlined">label_important</span>
          <span>Important</span>
        </NavLink>
        <NavLink onClick={HandleClick} className={"flex items-center gap-1"} to={"/bin"}>
          <span className="material-symbols-outlined">delete</span>
          <span>Bin</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
