// default animations

// motion variants
const baseVariants = {
  hidden: {
    opacity: 0,
    y: -5,
    transition: { staggerChildren: 0.1, duration: 0.35 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { staggerChildren: 0.1, duration: 0.35 },
  },
  scrolling: { scale: 0.95 },
};

const baseMotionSettings = {
  variants: baseVariants,
  animate: 'visible',
  initial: 'hidden',
  exit: 'hidden'
}

export { baseVariants, baseMotionSettings };
