import { Creature, Game } from './index';

const Bob = new Creature({
  name: "dog",
  nick: "Bob",
  numLegs: 4,
  hasTail: true,
  diet: "carnivorous",
  height: 100,
  skin: "scales",
  numEyes: 2,
  hp: 100,
  atk: 10,
  def: 10,
  gfx: `
          ,
   /=======Op
  /  |     |
  `
});

const Onyxia = new Creature({
  name: "spider",
  nick: "Onyxia",
  numLegs: 6,
  hasTail: false,
  diet: "carnivorous",
  height: 140,
  skin: "fur",
  numEyes: 8,
  hp: 150,
  atk: 15,
  def: 8,
  gfx: `
    \   /
   \ oOo /
  /  OoO  \
   / | | \
  `
});

test.only('a fight encounter takes place', () => {
  console.log("It was a beautiful day in spring, when suddenly Bob met a hungry giant spider:");

  Game.initEncounter(Bob, Onyxia);
});
