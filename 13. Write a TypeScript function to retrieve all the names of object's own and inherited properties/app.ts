//13. Write a TypeScript function to retrieve all the names of object's own and inherited properties.   

// animal.ts

abstract class Animal {
    private dna: number;
    name: string;

    constructor(name: string) {
        this.dna = Math.random();
        this.name = name;
    }

    abstract shout(): string;
}

// bird.ts

class Bird extends Animal {
    constructor() {
        super();
        this.name = "Hector";
    }
    shout(): string {
        return "Cuicui!"; // sorry it is in French... I do not know how a bird shouts in English ^_^
    }
}