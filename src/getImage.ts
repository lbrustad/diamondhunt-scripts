import { ImageObject } from './ImageObject';
import { global } from './global';

export const getImage = (img: string, i: string) => {
  if (global.imagesCache[i] != null && global.imagesCache[i].url == img) {
    return global.imagesCache[i].obj;
  }
  const $img = new ImageObject(img);
  global.imagesCache[i] = $img;
  return $img.obj;
};
