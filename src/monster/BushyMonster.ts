import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class BushyMonster extends MonsterBase {
  constructor() {
    super(
      'bushy',
      new MonsterAnimation('idle', [0, 1], 24),
      new MonsterAnimation(
        'hide',
        [
          0,
          1,
          2,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          2,
          1,
          0
        ],
        4
      )
    );
  }
}
