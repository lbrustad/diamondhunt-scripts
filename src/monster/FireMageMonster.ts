import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class FireMageMonster extends MonsterBase {
  constructor() {
    super('fireMage', new MonsterAnimation('idle', [0, 1, 2], 12));
  }
}
