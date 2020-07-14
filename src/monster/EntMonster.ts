import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class EntMonster extends MonsterBase {
  constructor() {
    super('ent', new MonsterAnimation('idle', [0, 1], 24));
  }
}
