function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortNumbers([5, 2, 8, 1, 4]));

// output: [ 1, 2, 4, 5, 8 ]
