// const generateNumberArray = (num) => {
//   const arr = [];
//
//
//   for (let i = 0; i < num; i++) {
//     arr.push(i)
//   }
//
//   return arr;
// }


const binarySearch = (number, searchedNumber, min = 0, max = number) => {
  const middle = Math.round(min + ((max - min) / 2))

  if(searchedNumber > middle) {
    return binarySearch(number, searchedNumber, middle, max)
  }

  if(searchedNumber < middle) {
    return binarySearch(number, searchedNumber, min, middle)
  }


  return middle === searchedNumber;
}

// const binarySearch = (number, searchedNumber) => {
//   for (let i = 0; i < number; i++) {
//     if(searchedNumber === i) {
//       return true;
//     }
//   }
// }

console.time('test binary search')

console.log(binarySearch(100000000000000000000000000000, 99900000000000000000000))

console.timeEnd('test binary search')
