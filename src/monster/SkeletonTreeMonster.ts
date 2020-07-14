import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class SkeletonTreeMonster extends MonsterBase {
  constructor() {
    super('skeletonTree', new MonsterAnimation('idle', [0], 12));
  }
}
