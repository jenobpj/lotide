/* EqArray function */
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
/*Assert Equal function */
const assertArrayEqual=function(arr1,arr2){
  const result=eqArrays(arr1,arr2)
  if(result){
    console.log(`✅ ✅ ✅  Assertion passed: ${arr1} === ${arr2}`);
  }
  else{
    console.log(`❌ ❌ ❌  Assertion failed: ${arr1} !== ${arr2}`);
  }
};
/* Middle element finder */
const middle=(array)=>{
  let middleArray=[];
  if(array.length%2 ===1)
  {
  let middleIndex=Math.floor(array.length/2)
  middleArray.push(array[middleIndex])
  console.log(`middle number of odd array= ${middleArray}`)
  }
  else
  {
    let middleNumber1=Math.floor((array.length-1) / 2);
    let middleNumber2=Math.floor(array.length/2);
    middleArray.push(array[middleNumber1],array[middleNumber2])
    console.log(`middle numbers of even array = ${middleArray}`)
  }
  

}
middle([1,2,3,4,5,5,6,7,8])