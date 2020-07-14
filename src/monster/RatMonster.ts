import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class RatMonster extends MonsterBase {
  constructor() {
    super('rat', new MonsterAnimation('idle', [0, 1], 24));
  }
}
