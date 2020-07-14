import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class SkyChickenMonster extends MonsterBase {
  constructor() {
    super('skyChicken', new MonsterAnimation('idle', [0, 1], 24));
  }
}
