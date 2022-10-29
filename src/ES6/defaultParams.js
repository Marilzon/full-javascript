/**
 * If you don't pass any arguments to the function, it will use the default values.
 * @param [name=EMPTY] - "EMPTY"
 * @param [surname=EMPTY] - "EMPTY"
 */
function showName(name = "EMPTY", surname = "EMPTY") {
	console.log(`${name} ${surname}`)
}

showName()
showName("Raph", "Clark")
