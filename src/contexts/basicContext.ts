import { createContext } from 'react';

export const BasicProviderDefaults: IBasicProvider = {
  width: 0,
  height: 0,
  OS: undefined,
  isTablet: false,
  isXs: false,
};

export const BasicContext = createContext<IBasicProvider>(
  BasicProviderDefaults
);
