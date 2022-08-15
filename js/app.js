/* Máximo Denominador Comum (MDC), Algoritimo Elclides */
const mdc = () => {
    let arr = []
    let a = prompt("Digite o primeiro numero")
    let b = prompt("Digite o segundo numero")
    let result = 0

    arr.push(a, b)
    arr.sort()

    do {
        result = arr[0] % arr[1]
        arr[0] = arr[1]
        arr[1] = result
    } while (result !== 0)

    return arr[0]
}

