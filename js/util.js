const main = document.querySelector(`.app`);

export const createElement = (template) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer.firstElementChild;
};

export const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};
