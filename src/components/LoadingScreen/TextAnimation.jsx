import React from 'react';
import { motion } from 'framer-motion';

export function TextAnimation() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut"
          }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-blue-600 to-indigo-600
                     tracking-wide"
        >
          Tanmay kumar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: "easeOut"
          }}
          className="mt-4 text-xl md:text-2xl 
                     text-gray-700 dark:text-gray-300 
                     tracking-wider
                     font-semibold"
        >
          <span className="bg-clip-text text-transparent 
                           bg-gradient-to-r from-teal-600 to-green-600">
            Software Developer
          </span>
        </motion.p>
      </div>
    </div>
  );
}

export default TextAnimation;