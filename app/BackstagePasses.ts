import { Item } from "./Item";
export class BackstagePasses extends Item {
  remainingDayOfConcert: number;
  maxQuality = 50;
  minQuality = 0;
  constructor(name, sellIn, quality, remainingDayOfConcert) {
    super(name, sellIn, quality);
    this.remainingDayOfConcert = remainingDayOfConcert;
  }
  updateQuality(): number {
    if (this.quality < this.maxQuality) {
      this.increaseQuality();
      this.sellIn -= 1;
    }
    return this.quality;
  }
  decreaseQuality(): void {}
  increaseQuality(): void {
    if (5 < this.remainingDayOfConcert && this.remainingDayOfConcert < 11) {
      this.quality += 2;
      this.remainingDayOfConcert -= 1;
    } else if (this.remainingDayOfConcert < 6) {
      this.quality += 3;
      this.remainingDayOfConcert -= 1;
    } else if (this.remainingDayOfConcert < 0) {
      this.quality = this.minQuality;
      this.remainingDayOfConcert -= 1;
    }
  }
}
