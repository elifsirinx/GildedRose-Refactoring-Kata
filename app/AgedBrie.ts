import { Item } from "./Item";

export class AgedBrie extends Item {
  maxQuality = 50;
  minQuality = 0;
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  updateQuality(): number {
    if (this.quality < 50) {
      this.increaseQuality();
    }
    return this.quality;
  }
  decreaseQuality(): void {}
  increaseQuality(): void {
    this.quality += 1;
    this.sellIn -= 1;
  }
}
