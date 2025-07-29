import { createContext, useRef } from "react";

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const hasAnimated = useRef(false);
  return (
    <AnimationContext.Provider value={hasAnimated}>
      {children}
    </AnimationContext.Provider>
  );
};
