
import { deepEqual } from "assert";
import { flatten } from '../flatten'

describe("#flatten", () => {
  it("returns flattened array", () => {
    deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  })
});