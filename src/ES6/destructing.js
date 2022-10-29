const data = {
	userName: 'Max',
	stacks: {
		frontend: 'react',
		backend: 'node'
	}
}

/* Destructuring the data object. */
const { userName, stacks } = data

console.log(userName, stacks)
