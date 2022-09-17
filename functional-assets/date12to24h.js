var stringInput = "12:45:54PM"

function timeConversion(s) {
    let isPM = /PM$/
	let hour
	let result

	if (s.match(isPM)) {
		hour = parseInt(s.substring(0, 2))
		if (hour < 12) {
			hour += 12
		}

		String(hour)
	} else {
		hour = parseInt(s.substring(0, 2))

		if (hour == 12) {
			hour = hour - 12
			hour = '0'+String(hour)
		}
		else if (hour < 10) {
			hour = '0'+String(hour)
		} else {
			String(hour)
		}
	}

	result = hour+s.substring(2,8)
	return result
}

timeConversion(stringInput)
