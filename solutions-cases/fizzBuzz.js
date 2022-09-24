function fizzBuzz(n) {
	for (let currentNumber = 1; currentNumber <= n; currentNumber++) {
		if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
			console.log('FizzBuzz')
		}
		else if (currentNumber % 3 == 0) {
			console.log("Fizz")
		}
		else if (currentNumber % 5 == 0) {
			console.log("Buzz")
		} else {
			console.log(currentNumber)
		}
	}
	return
}

fizzBuzz(10)
