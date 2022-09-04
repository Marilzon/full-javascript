const isPallindrome = function(number) {
    let fnumber = String(number)
    let pnumber = fnumber.split("").reverse().join("")

    if (fnumber === pnumber) {
        return true
    } else {
        return false
    }
}

export { isPallindrome }
