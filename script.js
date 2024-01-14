// take an array as an argument
const mergeSort = function (array) {
  const arrayHalfOne = [];
  const arrayHalfTwo = [];
  const newArray = [];
  // if the array length is 1 return it as sorted
  if (array.length === 1) {
    return array;
  } else {
    // if the array length is greater than 1 split it into 2 halves with any odd numbers splitting the same way every time
    const arrayHalfOneLength = math.floor(array.length / 2);

    for (let i = 0; i < arrayHalfOneLength; i++) {
      arrayHalfOne.push(array[i]);
    }
    for (let i = arrayHalfOneLength; i < array.length; i++) {
      arrayHalfTwo.push(array[i]);
    }
  }

  // call the function recursively on those two array halves
  const arraySortedOne = mergeSort(arrayHalfOne);
  const arraySortedTwo = mergeSort(arrayHalfTwo);

  // compare the two returned arrays and sort them by comparing the first number in each array;
  // the smallest number gets added to a new array. Keep doing this until both old arrays are
  // empty. If one array is empty then just push all remaining items from the non-empty array
  // to the end of the new array
  while (arraySortedOne.length || arraySortedTwo.length) {
    if (arraySortedOne.length && arraySortedTwo.length) {
      if (arraySortedOne[0] <= arraySortedTwo[0]) {
        newArray.push(arraySortedOne[0]);
        arraySortedOne.shift();
      } else {
        newArray.push(arraySortedTwo[0]);
        arraySortedTwo.shift();
      }
    } else if (arraySortedOne.length) {
      newArray.push(...arraySortedOne);
    } else if (arraySortedTwo.length) {
      newArray.push(...arraySortedTwo);
    }
  }

  // when all the comparing is complete return the new array
  return newArray;
};

const testArrayOne = [3, 2, 1, 13, 8, 5, 0, 1];
const testArrayTwo = [105, 79, 100, 110];

const sortedTestOne = mergeSort(testArrayOne);
const sortedTestTwo = mergeSort(testArrayTwo);

console.log(testArrayOne);
console.log(sortedTestOne);
console.log(testArrayTwo);
console.log(sortedTestTwo);
