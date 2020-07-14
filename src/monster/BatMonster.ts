import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class BatMonster extends MonsterBase {
  constructor() {
    super('bat', new MonsterAnimation('idle', [0, 1, 2, 3], 5));
  }
}
