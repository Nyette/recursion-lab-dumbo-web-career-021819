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
  if (array.length === 1) {
    return array[0];
  }
  let firstNum = array[0];
  let lastNum = array[array.length - 1];
  return maxOf(firstNum < lastNum ? array.slice(1) : array.slice(0, -1));
}

function includesNumber(array, number) {
  if (array.length === 0) {
    return false;
  } else {
    // the array is not empty, so it may contain the number
    let firstNum = array[0];
    if (number === firstNum) {
      return true;
    } else {
      return includesNumber(array.slice(1), number);
    }
  }
}
