const longestCommonPrefix = function(strs) {
  longestCommon = ""
  let firstWord = strs[0]
  for(let i = 0; i < firstWord.length ; i++){
    let currentLetter =  firstWord[i];
      for(let j = 1; j < strs.length; j++){
         let compStr = strs[j]
         let compFirstLtr = compStr[i];

         if(currentLetter !== compFirstLtr )
         return firstWord.slice(0,i)
        }
  }

  return firstWord;
}

strs = ["flower","flow","flight"];

console.log(longestCommonPrefix(strs));
