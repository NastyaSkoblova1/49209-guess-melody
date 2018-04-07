const main = document.querySelector(`.app`);

export const createElement = (templateHTML) => {
  const template = document.createElement(`template`);
  template.innerHTML = templateHTML;

  return template.content;
};

export const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};
