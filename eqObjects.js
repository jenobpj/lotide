const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
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
const eqObjects=function(object1,object2){
  const keys=Object.keys(object1);
  if(object1.length === object2.length){
  for(key of keys){
    if(Array.isArray(object1[key])&&Array.isArray(object2[key])){
      return eqArrays(object1[key],object2[key])
    }else{
    if(object1[key] !==object2[key])
    return false
    }
  }
  return true
  }
  return false;
}
//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // =>
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),true); // => false