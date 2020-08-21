import { parseJson } from '../src';

describe('parseJson', () => {
  it('simple parse', () => {
    expect(parseJson(JSON.stringify({ my_name: 'MrHeer' }))).toEqual({
      myName: 'MrHeer',
    });
  });
});
