/**
 * Created by Bobby on 9/18/2016.
 */

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumFor(list) {
  let sum = 0;
  for (const i of list) {
    sum += i;
  }
  return sum;
}
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i += 1;
  }
  return sum;
}
function sumRecursion(listin) {
  const list = listin.slice();
  if (list.length === 0) {
    return 0;
  }
  return list.pop() + sumRecursion(list);
}
function sumTheSimpleWay(list) {
  return _.reduce(list, (m, i) => (m + i));
}
console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));
