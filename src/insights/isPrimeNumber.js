const isPrimeNumber = function(number) {
    let fnumber = number
    let iterator = 2

    for (iterator = 2; i <= fnumber - 1; i++) {
        if (fnumber % iterator == 0) {
            return false
        }
    }

    if (iterator === fnumber) {
        return true
    }
}
