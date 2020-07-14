export class MonsterAnimation {
  constructor(public readonly name: string, public readonly framesArray: number[], public readonly speed: number) {}

  public getNumberOfFrames() {
    return this.framesArray.length;
  }
}
