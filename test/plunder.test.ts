import { expect, test } from "bun:test";
import { getRandomCoords } from "../public/plunder/game";

test.each(Array(1000).fill(null))("getRandomCoords doesn't roll a 19 %#", () => {
    expect(getRandomCoords().number).not.toBe(19);
});
