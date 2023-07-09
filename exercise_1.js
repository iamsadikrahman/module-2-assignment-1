function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [val1, , val2] = arr;

  return { name, age };
}

const obj = { name: "John", age: 30, city: "New York" };
const arr = [10, 20, 30, 40];
const result = destructureExample(obj, arr);

console.log(result);

// output: { name: 'John', age: 30 }
