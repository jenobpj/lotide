const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑  Assertion failed: ${arr1} !== ${arr2}`);
  }
};
assertArraysEqual([1,2,3],[1,2,3])

module.exports = assertArraysEqual;