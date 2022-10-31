import { Item } from "./Item";

export class Conjured extends Item {
  maxQuality = 50;
  minQuality = 0;
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  updateQuality(): number {
    if (this.quality > 0) {
      this.decreaseQuality();
    }
    return this.quality;
  }
  decreaseQuality(): void {
    if (this.sellIn < 0) {
      this.quality -= 2;
      this.sellIn -= 1;
    } else {
      this.quality -= 1;
      this.sellIn -= 1;
    }
  }
  increaseQuality(): void {}
}
