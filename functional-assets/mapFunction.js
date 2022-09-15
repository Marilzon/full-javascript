/*
	- when i need use map?
	- when i need transform original array to return the same amount items
*/
const numbers = [1, 2, 3]
console.log(numbers)
const setNumbers = numbers.map(item => item * 2)
console.log(setNumbers)

const prices = [20, 10, 30, 25, 15, 40, 80, 5]
console.log(prices)
const newPrices = prices.map(price => price / 2)
console.log(newPrices)

const products = [
	{ name: 'Mouse Sem Fio', price: 30 },
	{ name: 'Pen Drive', price: 25 },
	{ name: 'Cartucho de Tinta', price: 50 },
	{ name: 'Suporte Ergonômico para Notebook', price: 23 },
	{ name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const newProducts = products.map(product => {
	if (product.price >= 30) {
		return {
			name: product.name,
			price: product.price / 2
		}
	}
	return product
})
console.log(newProducts)
