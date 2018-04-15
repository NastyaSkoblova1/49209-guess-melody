export const setTimer = (time) => {
  const timer = {
    time,
    tick() {
      if (timer.time > 0) {
        timer.time--;
        return timer.time;
      } else {
        return false;
      }
    }
  };

  return timer;
};
