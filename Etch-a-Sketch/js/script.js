const container = document.querySelector('.container');

const divsContainer = document.createElement('div');
divsContainer.className = 'divsContainer';

const createDivs = function () {
  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      const divs = document.createElement('div');
      divs.className = 'divs'
      divsContainer.appendChild(divs);
    }
  }
};

createDivs();
container.appendChild(divsContainer);