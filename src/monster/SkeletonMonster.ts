import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class SkeletonMonster extends MonsterBase {
  constructor() {
    super('skeleton', new MonsterAnimation('idle', [0, 1], 24));
  }
}
