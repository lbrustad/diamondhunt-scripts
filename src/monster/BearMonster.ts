import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class BatMonster extends MonsterBase {
  constructor() {
    super('bear', new MonsterAnimation('idle', [0, 1], 24));
  }
}
