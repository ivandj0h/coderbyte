/*
The two sum problem is a common interview question, and it is a variation of the subset sum problem. There is a popular dynamic programming solution for the subset sum problem, but for the two sum problem we can actually write an algorithm that runs in O(n) time. The challenge is to find all the pairs of two integers in an unsorted array that sum up to a given S. 

For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.
*/
// our two sum function which will return
// all pairs in the array that sum up to S

const arr = [3, 5, 2, -4, 8, 11];
const target = 7;
function twoSum(arr, S) {
  var sums = [];
  var hashTable = {};

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
    // calculate S - current element
    var sumMinusElement = S - arr[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) {
      sums.push([arr[i], sumMinusElement]);
    }

    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];
  }

  // return all pairs of integers that sum to S
  return sums;
}

console.log(twoSum(arr, target));
