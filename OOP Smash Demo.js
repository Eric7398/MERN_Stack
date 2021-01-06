// Object Oriented Programming
// objects
// classes - blueprints for making objects

// const morley = {
//   firstName: 'Morley',
//   lastName: 'Tatro',
//   email: 'm@t.com',
//   hairColor: 'salt & pepper'
// };

// console.log(morley);

// Super Smash Bros game
// Character class
// Game class

class Character {
  // how we'd do it in Python
  // def __init__(self, name, color)
  constructor(name, color, power) {
    // self.name = name
    this.name = name;
    this.power = power;
    this.color = color;
    this.damage = 0;
    this.game = null; // to be joined later
  }

  punch(otherCharacter) {
    otherCharacter.damage += this.power;
    
    console.log(this.name + ' punched ' + otherCharacter.name + '!');

    if(otherCharacter.damage > 100) {
      // game over; determine how to handle this
      this.game.setWinner(this);
    }

  }

  kick(otherCharacter) {
    otherCharacter.damage += this.power * 2;

    if(otherCharacter.damage > 100) {
      // game over; determine how to handle this
      this.game.setWinner(this);
    }
  }

  joinGame(game, index) {
    // def join_game(self, game, index):
    //   game.players[index] = self
    game.players[index] = this; // setting this character to the player at that index
    this.game = game;
  }
}

// inheritance in Python
// class Kirby(Character):
class Kirby extends Character {
  // default color only used if not provided
  constructor(color = 'pink') {
    // super().__init__('Kirby', color, 4)
    super('Kirby', color, 4);
  }

  punch(otherCharacter) {
    // don't worry too much about this
    // throw an error if not a character
    if(otherCharacter instanceof Character === false) {
      throw new Error('That is not a character!');
    }

    // adding some functionality
    console.log('Kirby is punching now!');

    // calling the parent method
    super.punch(otherCharacter);
  }
}

class Game {
  constructor(timeLimit, levelName) {
    this.timeLimit = timeLimit;
    this.levelName = levelName;
    this.winner = null;
    this.players = [];
  }

  setWinner(character) {
    this.winner = character;
    console.log(character.name + ' is the winner!');
  }

  play() {
    // this keyword references the instance of the class!
    while(this.winner === null) {
      // 0 or 1
      const index = Math.round(Math.random());
    
      const attacker = this.players[index];
      const attackee = this.players[index === 0 ? 1 : 0];
    
      attacker.punch(attackee);
    }
  }
}

const firstGame = new Game('5 minutes', 'Hyrule Castle');

// p1 = Character('Kirby', 'red', 4)
const p1 = new Kirby();
const p2 = new Character('Link', 'green', 6);

p1.joinGame(firstGame, 0);
p2.joinGame(firstGame, 1);

console.log(firstGame);

firstGame.play();

const secondGame = new Game('5 minutes', 'Final Destination');

const game2player1 = new Character('Princess Peach', 'red', 3);
const game2player2 = new Character('Jiggly Puff', 'red', 6);

game2player1.joinGame(secondGame, 0);
game2player2.joinGame(secondGame, 1);

// secondGame.play();