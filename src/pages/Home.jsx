import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddNotesForm from "../components/AddNotesForm";
import NotesCard from "../components/NotesCard";
import { useNotes } from "../context/notesContext";
import TypingNotes from "../components/TypingNotes";
import { delay, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { AnimationContext } from "../context/animationContext";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.1, // delay before first child starts (1s)
      staggerChildren: 0.2, // bigger delay between each child
      // ensure children animate after container
    },
  },
};

const item = {
  hidden: { y: 1000 }, // more distance to make animation visible
  show: {
    // opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  const { state, menuActive, setMenuActive } = useNotes();

  const hasAnimated = useContext(AnimationContext);

  const shouldAnimate = !hasAnimated.current;

  useEffect(() => {
    hasAnimated.current = true;
  }, []);

  return (
    <>
      <div className="p-5 bg-[#f7f8fa] dark:bg-[#1a1a1a] text-[#111827] dark:text-[#e5e7eb] min-h-[100vh] overflow-x-hidden">
        <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
        <div className="min-h-full flex w-full">
          <Sidebar menuActive={menuActive} setMenuActive={setMenuActive} />
          <main className="w-full relative">
            {state.notes.length > 0 || state.pinnedNotes.length > 0 ? null : (
              <TypingNotes />
            )}
            <div className="flex justify-center">
              <AddNotesForm />
            </div>

            {state.pinnedNotes.length > 0 && (
              <>
                <div className="mx-3 sm:mx-15 mt-7">
                  <h2 className="text-xl font-bold">Pinned Notes:</h2>
                  <motion.div
                    variants={shouldAnimate ? container : undefined}
                    initial={shouldAnimate ? "hidden" : false}
                    animate={shouldAnimate ? "show" : false}
                    className="mb-5 mx-4"
                  >
                    <div className="flex flex-wrap gap-x-5 ">
                      {state.pinnedNotes.map((card) => (
                        <NotesCard
                          variants={shouldAnimate ? item : undefined}
                          {...card}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </>
            )}

            <div className="mx-3 sm:mx-15 mt-5 w-full">
              {state.pinnedNotes.length > 0 && (
                <h2 className="text-xl font-bold">Other Notes:</h2>
              )}
              <motion.div
                variants={shouldAnimate ? container : undefined}
                initial={shouldAnimate ? "hidden" : false}
                animate={shouldAnimate ? "show" : false}
                className="mb-5 mx-4"
              >
                <div className="flex flex-wrap gap-x-5">
                  {state.notes.map((card) => (
                    <NotesCard
                      variants={shouldAnimate ? item : undefined}
                      {...card}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
