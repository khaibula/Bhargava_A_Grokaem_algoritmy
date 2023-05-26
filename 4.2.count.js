const count = (arr) => {
  if (arr.length === 1) {
    return 1;
  }

  return 1 + count(arr.splice(1))
}

console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9]))
