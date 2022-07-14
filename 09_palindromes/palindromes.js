const palindromes = function (str) {
  let newStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); //removes punctuation
  newStr = newStr.replace(/\s/g, ""); //removes whitespace
  newStr = newStr.toLowerCase();
  return newStr === newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
