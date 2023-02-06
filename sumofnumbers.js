/* Write four functions that return the sum of the numbers in a given list using a for-loop,
a while-loop, recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.
 */

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
console.log('Hello');
console.log(sumFor([1, 2, 3]));
function sumWhile(list) {
  let sum = 0;
  let count = 0;
  while (count < list.length) {
    sum += list[count];
    count++;
  }
  return sum;
}
console.log('sumWhile: ');
console.log(sumWhile([1, 2, 3]));

function sumRecursion(list) {
  if (list.length === 0){
    return 0;
  }
  if (list.length === 1) {
    return list[0];
  }
  return list.pop() + sumRecursion(list);
}
console.log('sumRecursion');
console.log(sumRecursion([1, 2, 3]));

function sumTheSimpleWay(list) {
  let sum = 0;
  _.each(list, (list) => sum += list);
  return sum;
}

console.log('sumTheSimpleWay');
console.log(sumTheSimpleWay([1, 2, 3]));
