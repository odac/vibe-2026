
class TotoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'toto-generator');

    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('class', 'numbers');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers(numbersContainer));

    shadow.appendChild(wrapper);
    wrapper.appendChild(numbersContainer);
    wrapper.appendChild(button);

    this.generateNumbers(numbersContainer);
  }

  generateNumbers(container) {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }

    container.innerHTML = '';
    [...numbers].sort((a, b) => a - b).forEach(number => {
      const numberElement = document.createElement('div');
      numberElement.setAttribute('class', 'number');
      numberElement.textContent = number;
      container.appendChild(numberElement);
    });
  }
}

customElements.define('toto-generator', TotoGenerator);
