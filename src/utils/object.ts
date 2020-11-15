/* eslint-disable import/prefer-default-export */
export const isEqual = (a: object = {}, b: object = {}): boolean =>
  JSON.stringify(a) === JSON.stringify(b);
