import { Item } from "./Item";
export class Sulfuras extends Item {
  maxQuality = 80;
  minQuality = 80;
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  updateQuality(): number {
    this.quality = this.maxQuality;

    return this.quality;
  }
  decreaseQuality(): void {}
  increaseQuality(): void {}
}
