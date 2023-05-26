const findBigestNumber = (arr) => {
  if (arr.length === 1) {
    return arr[0]
  }

  const res = findBigestNumber(arr.splice(1));

  return arr[0] > res ? arr[0] : res
}

console.log(findBigestNumber([1, 2, 3, 45, 6, 6, 7, 7, 7, 88, 8, 9, 0, 8]))
