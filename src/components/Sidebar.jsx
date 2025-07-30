import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'
import { motion } from "framer-motion";
import { AnimationContext } from "../context/animationContext";
import { useTheme } from "../context/themeContext";

const Sidebar = ({menuActive,setMenuActive}) => {

  const HandleClick = ()=>{
      setMenuActive(!menuActive)
  }

const hasAnimated = useContext(AnimationContext);

  const shouldAnimate = !hasAnimated.current;

  useEffect(() => {
    hasAnimated.current = true;
  }, []);

    const { theme, toggleTheme } = useTheme();


  return (
    <motion.div 
    initial={shouldAnimate?{ x: -20, opacity: 0 }:false}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
    
    className={` 
  ${menuActive ? 'left-0' : '-left-[100vw]'} 
  sm:left-0 transition-all z-50 w-full sm:w-80 absolute sm:relative min-h-100vh sm:min-h-[91vh] sm:max-h-[91vh]
  
  bg-[linear-gradient(135deg,rgba(4,120,87,0.9)_0%,rgba(2,78,64)_100%)]
  sm:bg-[linear-gradient(135deg,rgba(16,185,129,0.1)_0%,rgba(5,150,105,0.05)_100%)]
  dark:bg-[linear-gradient(135deg,rgba(16,185,129,0.4)_0%,rgba(5,150,105,0.9)_100%)]
  backdrop-blur-md
  sm:backdrop-blur-none
  dark:backdrop-blur-lg
  
  flex flex-col p-3 rounded-xl
`}>
        <motion.div 
      initial={shouldAnimate?{ x: -100, opacity: 0 }:false}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}>
        <div className="flex items-center gap-3 ml-3 mt-4">
          <div className="p-2 rounded-xl w-12 h-12 flex items-center justify-center bg-[linear-gradient(to_right,rgba(52,211,153,0.9),rgba(20,184,166,0.9))]">
        <img className="sm:w-12 w-6 h-6 invert" src={logo} alt="logo" />
          </div>
        <h2 className="text-xl sm:text-3xl  text-white sm:text-black dark:text-white font-semibold">
          Note It
        </h2>
      </div></motion.div>
      <div className="text-white sm:text-[#4b5563] dark:text-white  flex h-full mt-5 pt-4 flex-col justify-between text-xl font-semibold">
        <div className="flex flex-col gap-3">
            <motion.div 
      initial={shouldAnimate?{ x: -20, opacity: 0 }:false}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.6 }}>
        <NavLink  onClick={HandleClick}   className={({ isActive }) =>
    `${isActive
      ? 'bg-[linear-gradient(to_right,rgba(52,211,153,0.9),rgba(20,184,166,0.9))] text-white' 
      : null} flex items-center gap-1 pl-4 hover:bg-[#ffffff80] dark:hover:bg-[#f5f5f510] rounded-xl p-4`
  } to={"/"}>
          <span className="material-symbols-outlined filled-icon">home</span>
          <span>Home</span>
        </NavLink>
        </motion.div>

          <motion.div 
      initial={shouldAnimate?{ x: -20, opacity: 0 }:false}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}>
        <NavLink onClick={HandleClick} className={({ isActive }) =>
    `${isActive
      ? 'bg-[linear-gradient(to_right,rgba(52,211,153,0.9),rgba(20,184,166,0.9))]  text-white '
      : null} flex items-center gap-1 pl-4 hover:bg-[#ffffff80] dark:hover:bg-[#f5f5f510] rounded-xl p-4`
  } to={"/archive"}>
          <span className="material-symbols-outlined filled-icon">archive</span>
          <span>Archive</span>
        </NavLink></motion.div>
          <motion.div 
      initial={shouldAnimate?{ x: -20, opacity: 0 }:false}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 1 }}>
        <NavLink onClick={HandleClick} className={({ isActive }) =>
    `${isActive
      ? 'bg-[linear-gradient(to_right,rgba(52,211,153,0.9),rgba(20,184,166,0.9))]  text-white '
      : null} flex items-center gap-1 pl-4 hover:bg-[#ffffff80] dark:hover:bg-[#f5f5f510] rounded-xl p-4`
  } to={"/important"}>
          <span className="material-symbols-outlined filled-icon">label_important</span>
          <span>Important</span>
        </NavLink></motion.div>
          <motion.div 
      initial={shouldAnimate?{ x: -20, opacity: 0 }:false}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 1.2 }}>
        <NavLink onClick={HandleClick} className={({ isActive }) =>
    `${isActive
      ? 'bg-[linear-gradient(to_right,rgba(52,211,153,0.9),rgba(20,184,166,0.9))]  text-white '
      : null} flex items-center gap-1 pl-4 hover:bg-[#ffffff80] dark:hover:bg-[#f5f5f510]  rounded-xl p-4`
  } to={"/bin"}>
          <span className="material-symbols-outlined filled-icon">delete</span>
          <span>Bin</span>
        </NavLink></motion.div>
        </div>

        <div className="w-full">

          <motion.div 
      initial={shouldAnimate?{ x: -20, opacity: 0 }:false}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 1.4 }}>
          <button onClick={toggleTheme} className={`flex items-center gap-1 pl-4 cursor-pointer w-full hover:bg-[#ffffff80] dark:hover:bg-[#f5f5f510] rounded-xl p-4`}>
          <span className="material-symbols-outlined filled-icon">{theme ==='dark'? "sunny" :"bedtime"}</span>
          <span>  {theme === 'dark' ? ' Light' : ' Dark'}</span>
        </button></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
