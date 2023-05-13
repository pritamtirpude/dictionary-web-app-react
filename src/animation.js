export const dropdownAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2 },
};

export const themeIconAnimation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.3, type: "spring" },
};

export const wordInfoAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export const dictionaryAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

export const githubAnimation = {
  initial: { opactiy: 0, top: 5, left: 0 },
  animate: { opacity: 1, top: -50, left: 10 },
  exit: { opacity: 0, top: 5, left: 0 },
  transition: { duration: 0.3, delay: 0.1, type: "spring" },
};

export const instagramAnimation = {
  initial: { opactiy: 0, top: 5, left: 0 },
  animate: { opacity: 1, top: -25, left: -35 },
  exit: { opacity: 0, top: 5, left: 0 },
  transition: { duration: 0.3, delay: 0.2, type: "spring" },
};

export const twitterAnimation = {
  initial: { opactiy: 0, top: 5, left: 0 },
  animate: { opacity: 1, top: 25, left: -45 },
  exit: { opacity: 0, top: 5, left: 0 },
  transition: { duration: 0.3, delay: 0.3, type: "spring" },
};
