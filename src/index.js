// @flow

export class Game {
  static initEncounter(one : Creature, two : Creature) {

    let a = one;
    let b = two;

    while (a.isAlive && b.isAlive) {
      a.attack(b);
      this.checkHealth(b);
      [a, b] = [b, a];
    }
  }
  static checkHealth(one : Creature) {
    if (one.hp <= 0) {
      one.die();
    }
  }
};

export class Creature {
  diet: 'carnivorous' | 'herbivorous' | 'omnivorous' | null;
  gfx: string;
  hasTail: boolean;
  height: number;
  name: string;
  nick: string;
  numEyes: number;
  numLegs: number;
  skin: string;
  weight: number;

  // stats
  agi: number;
  atk: number;
  def: number;
  hp: number;

  // condition
  isAlive: boolean;

  // unusual
  hasHeart: boolean;

  constructor(args : Object) {
    this.agi = args.agi;
    this.atk = args.atk;
    this.def = args.def;
    this.diet = args.diet;
    this.gfx = args.gfx;
    this.hasHeart = args.hasHeart;
    this.hasTail = args.tail;
    this.height = args.height;
    this.hp = args.hp;
    this.name = args.name;
    this.nick = args.nick;
    this.numEyes = args.numEyes;
    this.numLegs = args.numLegs;
    this.skin = args.skin;
    this.weight = args.weight;

    this.isAlive = true;
  };

  attack(enemy : Creature) {
    enemy.hp -= this.atk;
    console.log(`${this.name} attacks ${enemy.name}, inflicting ${this.atk} damage.`);
  }

  die() {
    this.isAlive = false;
    console.log(`${this.nick} the ${this.name} dies in agony.`, this.gfx);
  }
};
