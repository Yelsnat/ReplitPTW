import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "wouter";

export function PageTransition({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.4,
          ease: "easeInOut"
        }}
        className="bg-white min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
