

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '100%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
};
import { motion } from 'framer-motion';
const Transition = ({ value }) => {
  const data = value.replace('/', '').charAt(0).toUpperCase() + value.replace('/', '').slice(1);

  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2557]  flex justify-center items-center '
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit" transition={{ delay: 0, duration: 1.1, ease: 'easeInOut' }}
      >
        {/* above content */}
        <motion.div
          className="text-center text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          initial={{ opacity: 1 }}          // Start invisible
          animate={{ opacity: 0 }}           // Fade in to visible
          transition={{ delay: 0, duration: 1.5, ease: 'easeInOut' }} // 2-second delay before showing, with a fade-in effect over 0.5 seconds
        >
          {data || 'Home'}
        </motion.div>

      </motion.div>
      {/* <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit" transition={{ delay: 0.1, duration: 0.4, ease: 'easeInOut' }}
      >

      </motion.div> */}
      {/* <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-5 bg-[#e0dde9]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit" transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
      >

      </motion.div> */}
    </>
  );
}

export default Transition;

