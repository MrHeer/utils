import { arr2obj } from '../src';

describe('arr2obj', () => {
  it('convert a array of object to object', () => {
    expect(
      arr2obj([
        { key: 1, name: 'MrHeer', age: 24 },
        { key: 2, name: 'Linming', age: 20 },
      ])
    ).toEqual({
      1: { key: 1, name: 'MrHeer', age: 24 },
      2: { key: 2, name: 'Linming', age: 20 },
    });
  });
});
