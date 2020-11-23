/* eslint-disable import/prefer-default-export */
export const isEqual = (a: object | null, b: object | null): boolean =>
  JSON.stringify(a) === JSON.stringify(b);
