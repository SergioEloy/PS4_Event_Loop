function destroyer(array, ...args){
    return array.filter(item => !args.includes(item))
}
 //returns an array with the remaining items that are not included in
    //the arguments

example1 = [1, 2, 3, 1, 2, 3]
console.log(destroyer(example1, 2, 3))//[1, 1]

example2 = [1, 2, 3, 5, 1, 2, 3]
console.log(destroyer(example2, 2, 3))//[1, 5, 1]