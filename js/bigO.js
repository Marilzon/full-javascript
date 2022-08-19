/* | Notação do O Grande  */
/* | Big O notation */
const whyMyInput = function(input) {
    /*
        Custo de execução constante, indenpendente da entrada.
    */
    return `My input is ${input}`
}

const sumUpTo = function(number) {
    /*
        O(N) - Custo de execução aumenta linearmente
        com base no valor de entrada
    */
    return (number * (number + 1) / 2)
}

export { whyMyInput, sumUpTo }
