/* ------- Array -------  */
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

/* ------- Object -------  */

const AddWorkerData = (people: { firstName: string; lastName: string }) => {
  return {
    ...people,
    fullName: `${people.firstName} ${people.lastName}`,
  };
};

const worker1 = AddWorkerData({ firstName: 'Osman', lastName: 'Gokmen' }); // it works
const worker2 = AddWorkerData({
  firstName: 'Osman',
  lastName: 'Gokmen',
  // age: 18,
}); // age is not assignable

const AddWorkerDataGenericType = <
  T extends { firstName: string; lastName: string }
>(
  people: T
) => {
  return {
    ...people,
    fullName: `${people.firstName} ${people.lastName}`,
  };
};

const genericWorker1 = AddWorkerDataGenericType({
  firstName: 'Osman',
  lastName: 'Gokmen',
}); // it works
const genericWorker2 = AddWorkerDataGenericType({
  firstName: 'Osman',
  lastName: 'Gokmen',
  age: 18,
}); // it works
