import { deepEqual } from "assert";
import { tail } from "../tail"

describe("#tail", () => {
  it("returns [\"Lighthouse\", \"Labs\"] for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"] );
  });
});


