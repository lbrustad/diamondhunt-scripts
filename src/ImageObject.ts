export class ImageObject {
  public obj: HTMLImageElement = new Image();

  constructor(public url: string) {
    this.obj.src = url;
  }
}
