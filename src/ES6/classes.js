class Animal {
	constructor(kind, sound) {
		this.kind = kind,
		this.sound = sound
	}

	hello() {
		console.log(`${this.sound}, I'm a ${this.kind}`)
	}

	static info() {
		console.log(`This is a class to create new animal`)
	}

	get name() {
		console.log("My name is Doggggo!")
	}

	set newname(nick) {
		this.nick = nick
	}
}

const dog = new Animal('Doggo', 'Woof!')

console.log(`instance Dog is a`, dog)
console.log(dog.hello())
console.log(dog.info)
console.log(dog.name)

dog.newname = 'Rexxxxx'
console.log(dog.nick)

