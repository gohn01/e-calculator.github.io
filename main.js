let input = document.getElementById('input');

function addToInput(value) {
  input.value += value;
}

function calculate() {
  let result = 0;
  const inputArr = input.value.split(/(\+|\-|\*|\/)/);

  for (let i = 0; i < inputArr.length; i++) {
    const value = inputArr[i].trim();
    const operator = inputArr[i - 1];

    if (value !== '' && !isNaN(value)) {
      if (operator === '+') {
        result += Number(value);
      } else if (operator === '-') {
        result -= Number(value);
      } else if (operator === '*') {
        result *= Number(value);
      } else if (operator === '/') {
        result /= Number(value);
      } else {
        result = Number(value);
      }
    }
  }

  input.value = result;
}

function clearInput() {
  input.value = '';
}

