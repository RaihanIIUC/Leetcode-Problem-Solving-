/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

  if(s.length !== t.length){
    return false;
  }

  const sCahrCounts = {};

  for(let i = 0 ; i< s.length ; i++){
    const sChar = s[i];
    console.log(sCahrCounts[sChar]);

     sCahrCounts[sChar] = sCahrCounts[sChar] + 1 || 1;
  }

  for(let i = 0; i< t.length; i++){
    const tChar = t[i];
 
    if(!sCahrCounts[tChar]){
      return false;
    }else{
      sCahrCounts[tChar]--;
    }
  }
  return true;
};
