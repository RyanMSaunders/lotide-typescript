import { assertEqual } from "../assertEqual";
import { tail } from "../tail"

describe("#tail", () => {
  it("returns [\"Lighthouse\", \"Labs\"] for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"] );
  });
});


