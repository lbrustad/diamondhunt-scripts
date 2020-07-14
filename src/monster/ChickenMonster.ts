import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class ChickenMonster extends MonsterBase {
  constructor() {
    super('chicken', new MonsterAnimation('idle', [0, 1], 24));
  }
}
