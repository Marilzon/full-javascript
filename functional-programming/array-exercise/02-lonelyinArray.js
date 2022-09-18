var a = [1,2,3,4,3,2,1]

function lonelyinteger(a) {
	let lowerItem = 0

	for (let item in a) {
		lowerItem = lowerItem ^ a[item]
	}
	return lowerItem
}

lonelyinteger(a)
