import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class GiantSnakeMonster extends MonsterBase {
  constructor() {
    super('giantSnake', new MonsterAnimation('idle', [0, 1], 24));
  }
}
