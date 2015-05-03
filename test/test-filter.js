import wu from '../es6/wu';
import { assert } from 'chai';

describe("wu.filter", () => {
  it("should filter based on the predicate", () => {
    assert.eqArray(["a", "b", "c"],
                   wu.filter(x => typeof x === "string",
                            [1, "a", true, "b", {}, "c"]));
  });
});
