class file {
	static async csvToJson(filePath) {
		return 'hello'
	}
}

(async function() {
	const result = await File.csvToJson('./../mocks/input-valid.csv')
	console.log('result', result)
})()
