import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class BoneHeadMonster extends MonsterBase {
  constructor() {
    super('boneHead', new MonsterAnimation('idle', [0, 1], 24));
  }
}
