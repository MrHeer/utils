import { camelCaseKeys } from '../src';

describe('camelCaseKeys', () => {
  it('works fine', () => {
    expect(
      camelCaseKeys({
        good_study: ['good', 'study'],
        nest_object: { test_name: 'test', good_first: 'good first' },
      })
    ).toEqual({
      goodStudy: ['good', 'study'],
      nestObject: { testName: 'test', goodFirst: 'good first' },
    });
  });
});
