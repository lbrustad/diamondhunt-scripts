import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class BeeMonster extends MonsterBase {
  constructor() {
    super('bee', new MonsterAnimation('idle', [0, 1, 2, 3], 5));
  }
}
