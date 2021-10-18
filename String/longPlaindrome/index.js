var longestPalindrome = function (s) {
  let startIndex = 0;
  let maxLenght = 1;

  function expandAroundMiddle(left, right) {
    // console.log(left,'<=left ' ,null, right,'<=right')
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPallLength = right - left + 1;
      // console.log(left,s[left],'first', undefined, right,s[right],'last');
      // console.log(currentPallLength,null,'pallLength')

      if (currentPallLength > maxLenght) {
        maxLenght = currentPallLength;
        startIndex = left;
        // console.log(startIndex,'sI')
      }
      left -= 1;
      right += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    //s.lenght = 5 ,left and right pointer  
     expandAroundMiddle(i - 1, i + 1); // 0-1 ,0+1 => -1, 1 ! pointer left and right
    expandAroundMiddle(i, i + 1); // 0 , 1 =>
  }

  // console.log(s.slice(startIndex,startIndex+maxLenght));
  return s.slice(startIndex, startIndex + maxLenght);
};
