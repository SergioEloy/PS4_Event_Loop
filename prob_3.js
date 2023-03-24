
function deleteElements(arr, condition) {
    while (arr.length > 0 && !condition(arr[0])) {//while the array has elements and the condition is not true
      arr.shift(); // remove first element of the array
    }
    return arr;
  }

  //EXAMPLE 1
console.log(deleteElements([1, 2, 3, 4], (n => n >= 3)))//[3, 4]

//EXAMPLE 2
console.log(deleteElements([1, 2, 3, 7, 4], (n => n > 3)))//[7, 4]

//EXAMPLE 3
console.log(deleteElements([0, 1, 0, 1], (n => n === 1)))//[1, 0, 1]

//EXAMPLE 4
console.log(deleteElements([0, 1, 0, 1], (n => n === 2)))//[]