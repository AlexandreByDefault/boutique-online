export const reduceArray = (arr:[], count:number) => {
  // allow you to remove last element in array until the length is === at count
  while (arr.length > count) {
    arr.pop();
  }
  return arr;
};
