var findJudge = function(n, trust) {
  const trusted = {};
  const trustee = {};
  judge = -1;

  if(n === trust.length)
  return -1;

  if(!trust.length && n === 1)
  return 1;

  for(let row = 0; row < trust.length; row++){
    if(trusted[trust[row][1]] === undefined)
      trusted[trust[row][1]] = 1;
    else
      trusted[trust[row][1]]++;

    if(trustee[trust[row][0]] === undefined)
      trustee[trust[row][0]] = 1;
    else
      trustee[trust[row][0]]++;
  }

  for(let keys in trusted){
    if(trusted[keys] === n - 1)
    judge = keys;
  }

  if(trustee[judge] !== undefined)
  return -1;

  return judge;
};

trust3 = [[1,2],[3,2],[1,3],[4,1],[3,1],[2,1],[2,3],[4,3],[4,2],[3,4],[2,4]]
// trust2 = [[1,3],[2,3]]
// trust1 = [[1,2]]

// console.log(findJudge(1, trust1));
// console.log(findJudge(3, trust2));
console.log(findJudge(4, trust3));
