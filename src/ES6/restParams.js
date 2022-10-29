/**
 * It takes a number and an array of numbers, and returns an array of numbers where each number is the
 * original number multiplied by the first number
 * @param mult - The first parameter is the multiplier.
 * @param rest - The rest parameter is an array of all the parameters passed to the function.
 * @returns [2, 4, 6]
 */
function multiply(mult, ...rest) {
	return rest.map(value => value * mult)
}
