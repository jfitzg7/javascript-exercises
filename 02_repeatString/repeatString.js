const repeatString = function (string, num) {
  let str = "";
  if (num < 0) {
    str = "ERROR";
  } else {
    while (num > 0) {
      str += `${string}`;
      num--;
    }
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
