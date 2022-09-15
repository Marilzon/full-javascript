/*
	when i can use filter?
	when you need get a new array with new amount of items
*/
const randomNumbers = [15, 10, 5, 36, 99, 37, 63]
const numbersGreaterThen30 = randomNumbers.filter(number => number > 30) //simillar a case => if true push else false
console.log(numbersGreaterThen30)

const users = [
	{ name: 'Ada Lovelace', new: true },
	{ name: 'Grace Hopper', new: false },
	{ name: 'Alan Turing', new: true },
	{ name: 'Linus Torvalds', new: false },
	{ name: 'Margaret Hamilton', new: true }
]
const newUsers = users.filter(user => user.new === true)
console.log(newUsers)
