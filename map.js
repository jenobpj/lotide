const words = ["ground", "control", "to", "major", "tom"];
const map=(array,cb)=>{
  const results=[];
  for(let item of array){
    results.push(cb(item))
  }
  return results;

}
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
const results1=map(words,(word)=>word[0]);
console.log(results1)
assertArrayEqual(results1,[ 'g', 'c', 't', 'm', 't' ])
