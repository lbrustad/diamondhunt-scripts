import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class SpiderMonster extends MonsterBase {
  constructor() {
    super('spider', new MonsterAnimation('idle', [0], 24), new MonsterAnimation('poison', [0, 1, 2, 3, 0, 0, 0, 0, 0], 4));
  }
}
