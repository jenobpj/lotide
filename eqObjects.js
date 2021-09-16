const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const eqObjects=function(object1,object2){
  const object1keys=Object.keys(object1);
  const object2keys=Object.keys(object2)
  if(object1keys.length === object2keys.length){
    for(let key of object1keys){
      if(object1[key]!==object2[key])
      return false
    }
    return true;
  }
  return false;
}
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

 assertEqual( eqObjects(ab, ba),true); // => true 

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),true); // => false