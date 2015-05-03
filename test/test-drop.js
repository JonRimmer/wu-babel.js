import wu from '../es6/wu';
import { assert } from 'chai';

describe("wu.drop", () => {
  it("should drop the number of items specified", () => {
    const count = wu.count().drop(5);
    assert.equal(count.next().value, 5);
  });
});
