import { keys } from 'lodash';

export const arr2obj = (
  arr: Array<Record<string, any>>,
  key: string = 'key'
) => {
  if (arr.length === 0) {
    return {};
  } else {
    return arr.reduce((obj, v) => {
      if (keys(v).includes(key)) {
        return {
          ...obj,
          [v[key]]: v,
        };
      }
      return obj;
    }, {});
  }
};
