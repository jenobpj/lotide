const countLetters=(words)=>{
  lettercount={}
  for(let word of words){
    if(word !== " "){
      if(lettercount[word]){
        lettercount[word]+=1
      }
      else{
        lettercount[word]=1
      }
    }
  }
  return lettercount;
}
console.log(countLetters('jenobnbbnn'))