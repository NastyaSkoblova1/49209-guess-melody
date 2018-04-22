export const setTimer = (time) => {
  const timer = {
    time,
    tick() {
      timer.time--;
      if (timer.time > 0) {
        return timer.time;
      } else {
        return false;
      }
    }
  };

  return timer;
};
