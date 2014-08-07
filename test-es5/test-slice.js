"use strict";
describe("wu.slice", (function() {
  it("should slice the front of iterables", (function() {
    assert.eqArray([3, 4, 5], wu.slice(3, undefined, [0, 1, 2, 3, 4, 5]));
  }));
  it("should slice the end of iterables", (function() {
    assert.eqArray([0, 1, 2], wu.slice(undefined, 3, [0, 1, 2, 3, 4, 5]));
  }));
}));