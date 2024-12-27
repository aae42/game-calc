import { expect, test } from "bun:test";
import { getRandomCoords } from "../public/plunder/game";

test.each(Array(1000).fill(null))("getRandomCoords gets good coords %#", () => {
    expect(getRandomCoords().number).not.toBe(19);
});
