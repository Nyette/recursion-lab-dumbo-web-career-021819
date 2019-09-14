// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  // 'cat' => 'tac'
  if (myString === '') {
    return '';
  } else {
    return reverseString(myString.substr(1)) + myString.charAt(0);
  }
}

function isPalindrome(myString) {
  if (myString.length < 2) {
    return true;
  }
  if (myString[0] === myString[myString.length - 1]) {
    return isPalindrome(myString.slice(1, myString.length - 1));
  }
  return false;
}

function addUpTo(array, index) {
  // return the sum of all values up to and including
  // the value at the given index
  // assume non-empty arrays are entered
  let sum = 0;
  if (index === 0) {
    return sum += array[0];
  } else {
    return addUpTo(array, index - 1) + array[index];
  }
}

function maxOf(array) {
  // returns the largest integer in an array
  let maxNum;
  if (array.length > 1) {
    return maxNum = array[0];
  } else {
    return maxNum = array[0];
  }
}

// function includesNumber(array, number) {
//   // returns 'true' if the number is present in the array
//   // returns 'false' if the number is not present in the array
//   if (array.length <= 0) {
//     return 'false';
//   } else {
//     // not an empty array
//     // we have to compare the number to every element in an array
//   }
// }
