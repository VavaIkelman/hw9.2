export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) throw new Error('Error: wrong name length');

    this.name = name;
    this.type = '';
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }
}
