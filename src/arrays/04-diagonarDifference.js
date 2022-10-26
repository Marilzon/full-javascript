let arr =
[
	[11,2,4],
	[4,5,6],
	[10,8,-12]
]

function diagonalDifference(arr) {
	let diagX = 0
	let diagY = 0

	for (let i = 0;i < arr.length;i++) {
		diagX += arr[i][i]

		diagY += arr[arr.length - 1 - i][i]
	}

    let result = Math.abs(diagX - diagY)
    return result
}

diagonalDifference(arr)

/*4, 19, 15*/
