import { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { AnimationContext } from "../context/animationContext";

const TypingNotes = () => {

  const hasAnimated = useContext(AnimationContext);
  
    const shouldAnimate = !hasAnimated.current;
  
    useEffect(() => {
      hasAnimated.current = true;
    }, []);

  const letters = "Notes".split("");

  return (
    <div className="absolute top-[60%] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={shouldAnimate?{ y: 100, opacity: 0, rotate: 0 }:false}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: i * 0.3, type: "spring", stiffness: 100 }}
          className="text-[20vh] font-bold"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingNotes;
