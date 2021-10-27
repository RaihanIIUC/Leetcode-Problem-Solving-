var addToArrayForm = function (A, K) {
  let i = A.length - 1;
  const temp = [];
  let carry = 0;

  for (; i >= 0 || K > 0; i--) {
    let digit2 = K % 10;
    K = Math.floor(K / 10);

    let digit1 = i < 0 ? 0 : A[i];
    let sum = digit2 + digit1 + carry;
    let digitSum = Math.floor(sum % 10);

    carry = sum / 10 ? sum / 10 : 0;
    temp.push(digitSum);
  }

  if (carry == 1) temp.push(carry);

  return temp.reverse();
};
