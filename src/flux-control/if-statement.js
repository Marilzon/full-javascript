const fakePassword = "dsad5445a655"

/* The above code is checking the length of the password and if it includes a number. If the password
is 12 characters or longer and includes a number, it will print "password secure". If the password
is 12 characters or longer or includes an @ symbol, it will print "middle password". If the password
is less than 12 characters and does not include an @ symbol, it will print "lower password". */
if (fakePassword.length >= 12 && fakePassword.includes("1")) {
	console.log(fakePassword, "password secure")
} else if (fakePassword.length >= 12 || fakePassword.includes("@")) {
	console.log(fakePassword, "middle password")
} else {
	console.log(fakePassword, "lower password")
}
