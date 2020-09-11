function filter(array, str) {
  let newArray = [];
  if (str === "even") {
    for (let i = 0; i <= array.length - 1; i++) {
      if (array[i] % 2 === 0) {
        newArray.push(array[i]);
      }
    }
  } else if (str === "odd") {
    for (let i = 0; i <= array.length - 1; i++) {
      if (array[i] % 2 !== 0) {
        newArray.push(array[i]);
      }
    }
  } else {
    return array;
  }
  return newArray;
}

console.log(filter([1, 2, 3, 4, 5], "even"));

// do not remove this line, it is for tests
module.exports = filter;
