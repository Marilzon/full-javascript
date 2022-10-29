const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const dataset = [
	{
		name: "Max",
		age: 30
	},
	{
		name: "Phol",
		age: 17
	}
]

/* Returning the first value that is less than 2. */
const underTwoFind = arr.find(value => value < 2)

/* Returning an array of all values that are less than 2. */
const underTwoFilter = arr.filter(value => value < 2)

/* Returning the first object in the array that has a name property with the value of "Max". */
const findMax = dataset.find(person => person.name === "Max")

console.log(underTwoFind)
console.log(underTwoFilter)
console.log(findMax)
