const nestArray = (arr) => {
  if (arr.length === 1) {
    return [arr[0]];
  } else {
    return [arr[0], nestArray(arr.slice(1))];
  }
};

console.log(nestArray([1, 2, 3, 4]));
console.log(nestArray([1]));
console.log(nestArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
