import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class LavaAlienMonster extends MonsterBase {
  constructor() {
    super(
      'lavaAlien',
      new MonsterAnimation('idle', [0, 1], 24),
      new MonsterAnimation('charge', [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], 4)
    );
  }
}
