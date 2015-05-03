import wu from '../es6/wu';
import { assert } from 'chai';

describe("wu.forEach", () => {
  it("should iterate over every item", () => {
    const items = [];
    wu.forEach(x => items.push(x), [1,2,3]);
    assert.eqArray([1,2,3], items);
  });
});
