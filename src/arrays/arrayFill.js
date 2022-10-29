/* Creating a new array with 50 empty slots. */
const newArr = new Array(50)

/* Filling the array with the strings */
newArr.fill('Wow Such')
console.log(newArr)

/* Filling the first 25 slots with the string 'hmm Much' */
newArr.fill('hmm Much', 0, 25)
console.log(newArr)
