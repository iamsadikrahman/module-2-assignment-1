function sumNumbers(...numbers) {
  return numbers.reduce((prev, cur) => {
    return prev + cur;
  });
}

console.log(sumNumbers(1, 2, 3, 4, 5));

// output: 15
