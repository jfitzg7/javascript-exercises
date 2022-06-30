const removeFromArray = function (arr, ...elementsToRemove) {
  let newArr = [];
  for (const element of arr) {
    if (!elementsToRemove.includes(element)) {
      newArr[newArr.length] = element;
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
