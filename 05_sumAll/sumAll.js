const sumAll = function (num1, num2) {
  if (
    !(typeof num1 === "number") ||
    !(typeof num2 === "number") ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  let lowerBound = 0;
  let upperBound = 0;
  if (num1 > num2) {
    lowerBound = num2;
    upperBound = num1;
  } else {
    lowerBound = num1;
    upperBound = num2;
  }

  let sum = 0;
  for (let i = lowerBound; i <= upperBound; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
