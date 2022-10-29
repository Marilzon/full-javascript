const defer = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (true) {
			resolve('Promise works')
		} else {
			reject('Promisse error!')
		}
	}, 2000)
})

defer
	.then((data) => { console.log(data)})
	.catch((error) => console.error(error))
