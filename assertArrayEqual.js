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
assertArrayEqual([1,2,3],[1,2,3])