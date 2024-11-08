/**
 * Implement without which will return a subset of a given array, 
 * removing unwanted elements.
 */

import { deepEqual } from "assert";
import { without } from "../without"

describe("#without", () => {
  it("returns [\"Lighthouse\", \"Labs\"] for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    deepEqual(without(["Yo Yo", "Lighthouse", "Labs"], ["Yo Yo"]),["Lighthouse", "Labs"] );
  });
});