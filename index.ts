const last = (arr: any[]) => {
  return arr[arr.length - 1];
};

console.log(last([1, 2, 3, 4, 5])); // return type is any
console.log(last(['1', '2', '3', '4', '5'])); // return type is any

const last2 = <T>(arr: T[]) => {
  // T is variable, it can be anything like <El>
  return arr[arr.length - 1];
};

console.log(last2([1, 2, 3, 4, 5])); // return type is number
console.log(last2(['1', '2', '3', '4', '5'])); // return type is string
