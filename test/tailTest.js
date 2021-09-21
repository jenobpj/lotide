const assert=require('chai').assert;
const tail=require('../tail')
describe('tail',()=>{
  it('should give proper array',()=>{
    const result=tail([1,2,3]);
    assert.deepEqual(result,[2,3])
  })

})