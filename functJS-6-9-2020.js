/*
function foo(x) { console.log(x); }
const fooN = x => console.log(x);
foo("hi");
fooN("bye");

const add = x => y => x + y;

function addOld(x) {
    return function(y) {
        return x + y;
    }
}

const addOne = add(1);
const addTwo = addOld(2);

console.log(addOne(1));
console.log(addTwo(2));

const add3 = (x, y) => {
    if (y) {
        return x + y;
    } else {
        return function(y) {
            return x + y;
        }
    }
}

console.log(add3(1, 2));
const addOnne = add3(1);
console.log(addOnne(2));

//mutable data with pet class

class Pet {
    constructor(species, name, sound, food) {
        this.species = species;
        this.name = name;
        this.sound = sound;
        this.food = food;
    }
    needsFood() {
        return console.log(this.name, " the ", this.species, " says ", this.sound, " for some ", this.food, ".")
    }
}
const Whiskers = new Pet("cat", "whiskers", "meow", "fish");
Whiskers.needsFood();

Whiskers.name = "Mister W";

Whiskers.needsFood(); 
*/
const pet = (species, name, sound, food) => ({ species, name, sound, food });
const whiskers = pet("cat", "Whiskers", "meow", "fish");

const needsFood = pet => console.log(`${pet.name}, the ${pet.species}, says ${pet.sound}, for some ${pet.food}`);

needsFood(whiskers);

const mrWhiskers = {...whiskers, name: 'Mister Whiskers' }

needsFood(mrWhiskers);