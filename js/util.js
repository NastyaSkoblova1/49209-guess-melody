export const main = document.querySelector(`.app`);

export const createElement = (template) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer.firstElementChild;
};

export const renderScreen = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

// const resultDisplayArr = [resultElement, resultEffortsElement, resultTimeElement];
// const getNumberOfResultDisplay = () => Math.floor(Math.random() * resultDisplayArr.length);
// const changeScreenOnResult = (e) => {
//   e.preventDefault();
//   renderScreen(resultDisplayArr[getNumberOfResultDisplay()]);
// };
