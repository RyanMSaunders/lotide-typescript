
import { middle } from '../middle'
import { deepEqual } from 'assert'


describe('#middle', () => {
  it('returns the middle values of an array', () => {
    deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });
  it('returns the middle values of an array', () => {
    deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
  it('returns empty array if only two values in an array', () => {
    deepEqual(middle([1, 2]), [])
  });
});