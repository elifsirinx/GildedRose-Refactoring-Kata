import { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      item.updateQuality();
    });
    return this.items;
  }
}
