import { global } from './global';
import { MonsterAnimation } from './MonsterAnimation';
import { getImage } from './getImage';

const sectionCombatLoader = document.getElementById('section-combat-loader') as HTMLElement;

if (sectionCombatLoader === null) {
  throw new Error('There is no #section-combat-loader element');
}

export class MonsterBase {
  private currentAnimation: MonsterAnimation;
  private frameAt: number = 0;
  private speedAt: number = 0;

  constructor(
    private readonly name: string,
    private readonly idleAnimationObject: MonsterAnimation,
    private readonly secondaryAnimationObject?: MonsterAnimation
  ) {
    this.currentAnimation = idleAnimationObject;
  }

  public preloadImages() {
    for (let i = 0; i < this.idleAnimationObject.getNumberOfFrames(); i++) {
      const img = getImage(
        `images/${this.name}_monster_${this.idleAnimationObject.name}_${this.idleAnimationObject.framesArray[i]}.png`,
        `${this.name}_${i}_${this.idleAnimationObject}`
      );

      sectionCombatLoader.append(img);
    }

    if (this.secondaryAnimationObject) {
      for (let i = 0; i < this.secondaryAnimationObject.getNumberOfFrames(); i++) {
        const img = getImage(
          `images/${this.name}_monster_${this.secondaryAnimationObject.name}_${this.secondaryAnimationObject.framesArray[i]}.png`,
          `${this.name}_${i}_${this.secondaryAnimationObject}`
        );

        sectionCombatLoader.append(img);
      }
    }
  }

  public tick() {
    global.animationObj = this.currentAnimation;
    if (this.speedAt === global.animationObj.speed) {
      this.frameAt++;
      if (this.frameAt >= global.animationObj.getNumberOfFrames()) {
        this.frameAt = 0;
        if (this.currentAnimation.name != 'idle') {
          this.currentAnimation = this.idleAnimationObject;
        }
      }
      this.speedAt = 0;
    } else {
      this.speedAt++;
    }
  }

  public callAnimation(canCreateDiscussions: boolean) {
    if (this.secondaryAnimationObject && canCreateDiscussions) {
      this.frameAt = 0;
      this.speedAt = 0;
      this.currentAnimation = this.secondaryAnimationObject;
    }
  }

  public getImage() {
    return getImage(
      `images/${this.name}_monster_${this.currentAnimation.name}_${this.currentAnimation.framesArray[this.frameAt]}.png`,
      `${this.name}_${this.frameAt}_${this.currentAnimation}`
    );
  }

  public getDeathImage() {
    const m = `images/${this.name}Monster_black.png`;
    return getImage(m, m);
  }

  public getWidth() {
    return this.getImage().width;
  }
  public getHeight() {
    return this.getImage().height;
  }
}
