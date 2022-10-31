import { expect } from "chai";
import { GildedRose } from "@/gilded-rose";
import { Item } from "@/Item";
import { Conjured } from "@/Conjured";
import { AgedBrie } from "@/AgedBrie";
import { BackstagePasses } from "@/BackstagePasses";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([
      new Conjured("Conjured", -1, 17),
      new AgedBrie("Aged Brie", 5, 30),
      new BackstagePasses("BackstagePasses", 10, 5, 6),
    ]);
    const items = gildedRose.updateQuality();
    //expect(items[0].name).to.equal("Sulfaras");
    //expect(items[1].sellIn).to.equal(4);
    expect(items[2].quality).to.equal(7);
  });
});
