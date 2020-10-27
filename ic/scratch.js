class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    printPerson() {
        console.log(this.name, '  is  ', this.age, '  years old ');
    };
}

let Bob = new Person('Bob ', 25);
Bob.printPerson();

class Queue {

    constructor(contents) {}
}