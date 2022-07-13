const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((previous, current) => previous + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((previous, current) => previous * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num < 2) return 1;
  total = 1;
  for (let i = num; i >= 2; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
