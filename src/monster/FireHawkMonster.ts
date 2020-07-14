import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class FireHawkMonster extends MonsterBase {
  constructor() {
    super('fireHawk', new MonsterAnimation('idle', [0, 1, 2, 3], 24), new MonsterAnimation('hide', [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], 2));
  }
}
