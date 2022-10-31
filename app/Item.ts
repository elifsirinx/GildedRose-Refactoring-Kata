export abstract class Item {
  name: string;
  sellIn: number;
  quality: number;
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  abstract maxQuality: number;
  abstract minQuality: number;
  abstract updateQuality(): number;
  abstract decreaseQuality(): void;
  abstract increaseQuality(): void;
}
