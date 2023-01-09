export const Staggercontainer = {
  hidden: {
    opacity: 0.5,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const Staggeritem = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
