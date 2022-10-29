arr = [1, 2, 3, 4, 5, 6, 7]

function findTheMedian(arr) {
	let result = arr.slice().sort((a, b) => a - b)[Math.floor(arr.length / 2)]
	return result
}

findTheMedian(arr)
