function findBiggerNum(num1, num2){
  return num1 > num2 ? num1 : num2;
}

function multiplyBiggerNumByTwo(num1, num2) {
  return findBiggerNum(num1, num2) * 2
}

function divideBiggerNumByThree(num1, num2) {
  return findBiggerNum(num1, num2) / 3
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBiggerNum(sum1, sum2);
  return `I ate ${bigNum} tacos.`
}

function adoptSmallerDog(weight1, weight2) {
  return findBiggerNum(weight1, weight2) === weight1 ? `I adopted a dog that weighs ${weight2} pounds.` : `I adopted a dog that weighs ${weight1} pounds.`
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
