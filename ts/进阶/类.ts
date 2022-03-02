class Animal {
    name: string;
    age: number;
    constructor(name: string) {
        this.name = name;
        this.age = 12;
    }
    sayHi(): string {
        return `My name is ${this.name}`;
    }
}

let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack