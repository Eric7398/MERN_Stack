class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Ninja's name is ${this.name}`);
    }

    showStats() {
        console.log(`${this.name} has ${this.health} health, ${this.speed} speed, ${this.strength} strength`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`Sake as been drank, health is now ${this.health}`)
    }

}


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }


}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
superSensei.drinkSake();