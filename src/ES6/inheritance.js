/**
 * The function Animal is a constructor function that creates objects with two properties: kind and
 * sound
 * @param kind - The kind of animal.
 * @param sound - The sound the animal makes
 */
function Animal(kind, sound) {
	kind;
	sound;
}

const dog = new Animal('dog', 'sound')

console.log(Animal, 'this is a constructor', typeof(Animal) )
console.log(dog, typeof(dog))
