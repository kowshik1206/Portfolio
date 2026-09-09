'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const bootSteps = [
    'Initializing UI shell',
    'Loading components',
    'Hydrating content',
    'Launching portfolio',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + 5, 100);
      });
    }, 18);

    const finish = window.setTimeout(() => {
      setProgress(100);
      window.setTimeout(() => setIsLoading(false), 220);
    }, 520);

    return () => {
      clearInterval(interval);
      clearTimeout(finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 cursor-pointer"
          onClick={() => setIsLoading(false)}
          role="button"
          aria-label="Skip loading screen"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setIsLoading(false);
            }
          }}
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            />
          </div>

          {/* Loading Content */}
          <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6 px-6">
            {/* Animated Logo/Initial */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 1,
              }}
              className="relative mb-2"
            >
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 h-28 w-28 rounded-full border-4 border-transparent border-t-primary-500 border-r-purple-500"
              />
              
              {/* Inner pulsing circle */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-28 w-28 items-center justify-center rounded-full border border-primary-500/30 bg-gradient-to-br from-primary-500/20 to-purple-500/20 backdrop-blur-sm"
              >
                <span className="text-4xl font-bold gradient-text">K</span>
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              className="text-center"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary-400">
                Web Developer Boot Sequence
              </p>
              <h2 className="text-2xl font-bold text-white mb-2">
                Preparing your experience
              </h2>
              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-gray-400"
              >
                Compiling components and launching the page
              </motion.p>
            </motion.div>

            {/* Boot log */}
            <div className="w-full rounded-2xl border border-dark-700/70 bg-dark-950/60 p-4 font-mono text-xs sm:text-sm text-left text-gray-300 shadow-2xl shadow-black/20 backdrop-blur-md">
              {bootSteps.map((step, index) => {
                const active = progress >= (index + 1) * 25;
                return (
                  <div key={step} className="flex items-center gap-3 py-1.5">
                    <span className={active ? 'text-green-400' : 'text-gray-500'}>
                      {active ? '>' : '·'}
                    </span>
                    <span className={active ? 'text-gray-100' : 'text-gray-500'}>{step}</span>
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="w-64 md:w-80"
            >
              {/* Progress container */}
              <div className="relative h-2 bg-dark-800 rounded-full overflow-hidden border border-dark-700">
                {/* Animated background shimmer */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
                />
                
                {/* Progress fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                />
              </div>
              
              {/* Progress percentage */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-center text-primary-400 text-sm font-semibold mt-3 tabular-nums"
              >
                {String(progress).padStart(3, '0')}%
              </motion.p>
            </motion.div>

            <p className="text-xs text-gray-500 text-center">
              Tap, press Enter, or Space to skip
            </p>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                  opacity: 0,
                }}
                animate={{
                  y: [
                    Math.random() * 200 - 100,
                    Math.random() * -200 + 100,
                    Math.random() * 200 - 100,
                  ],
                  x: [
                    Math.random() * 200 - 100,
                    Math.random() * -200 + 100,
                    Math.random() * 200 - 100,
                  ],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-primary-400 to-purple-400 blur-sm"
                style={{
                  top: `${50 + Math.random() * 20 - 10}%`,
                  left: `${50 + Math.random() * 20 - 10}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
