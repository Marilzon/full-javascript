/*
	when i can use reduce function?
	when i need reduce original array to a value, 'array or not'.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const sumNumbers = numbers.reduce((accumulator, item) => {
	console.log(accumulator, '+', item) // iteraction values
	return accumulator + item
}, 0)
console.log(sumNumbers)

const phaseScores = [
	{ name: 'Vinicius Costa', score: 337 },
	{ name: 'Roger Melo', score: 43 },
	{ name: 'Alfredo Braga', score: 234 },
	{ name: 'Pedro H. Silva', score: 261 },
	{ name: 'Ana Paula Rocha', score: 491 },
	{ name: 'Vinicius Costa', score: 167 },
	{ name: 'Roger Melo', score: 137 },
	{ name: 'Alfredo Braga', score: 135 },
	{ name: 'Ana Paula Rocha', score: 359 },
	{ name: 'Pedro H. Silva', score: 133 }
]
const totalScors = phaseScores.reduce((accumulator, phaseScore) => {
	if (phaseScore.name === 'Roger Melo') {
		return accumulator + phaseScore.score
	}

	return accumulator
}, 0)
console.log(totalScors)

