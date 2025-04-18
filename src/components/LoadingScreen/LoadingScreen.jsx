import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextAnimation from './TextAnimation';



export function LoadingScreen(props) {
    let {isLoading} = props
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <TextAnimation />
        </motion.div>
      )}
    </AnimatePresence>
  );
}