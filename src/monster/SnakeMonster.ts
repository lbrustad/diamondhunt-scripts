import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class SnakeMonster extends MonsterBase {
  constructor() {
    super('snake', new MonsterAnimation('idle', [0, 1], 24));
  }
}
