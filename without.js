const assertArrayEqual=function(arr1,arr2){
  const result=eqArrays(arr1,arr2)
  if(result){
    console.log(`✅ ✅ ✅  Assertion passed: ${arr1} === ${arr2}`);
  }
  else{
    console.log(`❌ ❌ ❌  Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
const without = function(source, itemsToRemove) {
  let newarray=[];
  for(let i=0;i< source.length;i++){
    if(! itemsToRemove.includes(source[i])){
    newarray.push(source[i])
  }
}
return newarray;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);