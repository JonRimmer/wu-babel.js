import wu from '../es6/wu';
import { assert } from 'chai';

describe("wu.enumerate", () => {
  it("should yield items with their index", () => {
    assert.eqArray([["a", 0], ["b", 1], ["c", 2]],
                   wu.enumerate("abc"));
  });
});
