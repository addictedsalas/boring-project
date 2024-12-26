import { motion } from 'framer-motion';

// Fade In animation component
export const FadeIn = ({ children, duration = 0.5, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Slide In animation component
export const SlideIn = ({ children, direction = 'left', duration = 0.5, delay = 0 }) => {
  const variants = {
    hidden: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Sticky Header component using CSS
export const StickyHeader = ({ children, offset = 0 }) => (
  <div
    style={{
      position: 'sticky',
      top: offset,
      zIndex: 1000,
      backgroundColor: 'white',
      transition: 'all 0.3s ease-in-out'
    }}
  >
    {children}
  </div>
);

// Scale animation component
export const ScaleIn = ({ children, duration = 0.5, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);
