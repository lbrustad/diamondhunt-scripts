import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class YetiMonster extends MonsterBase {
  constructor() {
    super(
      'yeti',
      new MonsterAnimation('idle', [0, 1, 2], 24),
      new MonsterAnimation('awake', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 10000)
    );
  }
}
