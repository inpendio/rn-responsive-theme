import { createContext } from 'react';

export const StyleProviderDefaults: IStyleProvider = {
  style: {},
};

export const StyleContext = createContext<IStyleProvider>(
  StyleProviderDefaults
);
