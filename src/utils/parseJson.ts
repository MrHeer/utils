import { camelCaseKeys } from './camelCaseKeys';

export const parseJson = (jsonStr: string) => {
  const orgJsonObj = JSON.parse(jsonStr);
  return camelCaseKeys(orgJsonObj);
};
