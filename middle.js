const eqArrays=require('./eqArray')
const assertEqual=require('./assertEqual')
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

module.exports=middle;