import { MonsterBase } from '../MonsterBase';
import { MonsterAnimation } from '../MonsterAnimation';

export class MammaPolarBearMonster extends MonsterBase {
  constructor() {
    super('mammaPolarBear', new MonsterAnimation('idle', [0, 1], 24));
  }
}
