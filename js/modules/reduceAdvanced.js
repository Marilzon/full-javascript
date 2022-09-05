/* Reducce with numbers */
const numbers = [1, 2, 3]
const sum = numbers.reduce(function(acc, item) {
    return acc + item
}, 0)

console.log(sum)

/* Reduce with objects generating string list */
const cart = [
    { name: 'Dark Souls', price: 101.19 },
    { name: 'Mario Kart', price: 50.19 },
    { name: 'Mortal Kombat', price: 89.00 },
    { name: 'The King of Fighters', price: 79.90 },
    { name: 'Dark Souls', price: 101.19 }
]
const gameList = cart.reduce(function(acc, { name }) {
    return `${acc}- ${name}\n`
}, '')

console.log(gameList)

/* Reduce with objects generating new objects */
const people = [
    { id: 1, name: 'Max', age: 18 },
    { id: 2, name: 'Hax', age: 18 },
    { id: 3, name: 'Flux', age: 41 },
    { id: 4, name: 'El', age: 41 },
    { id: 5, name: 'Lil', age: 13 },
    { id: 6, name: 'Nin', age: 30 },
    { id: 7, name: 'Sas', age: 30 },
]

const agesFrequency = people.reduce(function(acc, { age }) {
    acc[age] = acc[age] + 1 || 1
    return acc
}, {})

console.log(agesFrequency)
