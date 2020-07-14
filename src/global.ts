import { MonsterAnimation } from './MonsterAnimation';
import { ImageObject } from './ImageObject';

interface Global {
  animationObj: null | MonsterAnimation;
  imagesCache: {
    [index: string]: ImageObject;
  };
}

export const global: Global = {
  animationObj: null,
  imagesCache: {}
};
