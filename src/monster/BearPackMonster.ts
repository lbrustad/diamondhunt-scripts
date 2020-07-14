import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class BearPackMonster extends MonsterBase {
  constructor() {
    super('bearPack', new MonsterAnimation('idle', [0, 1], 24));
  }
}
