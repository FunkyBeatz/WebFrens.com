import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

const pageVariants = {
  initial: {
    opacity: 0.4,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0.4,
    y: 8,
    transition: {
      duration: 0.2,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

export default function PageTransition({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="relative min-h-[calc(100vh-4rem)] flex flex-col"
    >
      {/* Static background that persists during transitions */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
        </div>
      </div>

      {children}
    </motion.div>
  );
}