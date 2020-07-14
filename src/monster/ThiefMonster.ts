import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class ThiefMonster extends MonsterBase {
  constructor() {
    super('thief', new MonsterAnimation('idle', [0, 1], 24));
  }
}
