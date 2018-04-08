import { Creature } from './index';

export class CreatureDescription extends Creature {
  constructor() {
    super();
  }

  describe() {
    const tailPartial = this.tail
      ? "a tail"
      : "no tail";
    const heightPartial = this.getHeightPartial();
    const skinPartial = this.getSkinPartial();

    return `The ${heightPartial} creature has ${this.numLegs} legs and ${tailPartial}. Its body is covered in ${skinPartial}, and it possesses ${this.numEyes} eyes.`
  }

  getHeightPartial() {
    if (this.height >= 200) {
      return "towering";
    } else if (this.height >= 150 && this.height < 200) {
      return "tall";
    } else if (this.height >= 50 && this.height < 150) {
      return "medium-sized";
    } else {
      return "diminutive";
    }
  }

  getSkinPartial() {
    switch (this.skin) {
      case "scales":
        return "scales";
      case "fur":
        return "fur";
      default:
        return "";
    }
  }
}
