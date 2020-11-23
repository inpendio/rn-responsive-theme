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

export enum ORIENTATIONS {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
  'PORTRAIT-UPSIDEDOWN' = 'portrait',
  'LANDSCAPE-LEFT' = 'landscape',
  'LANDSCAPE-RIGHT' = 'landscape',
}

export const OrientationProviderDefaults: IOrientationProvider = {
  currentOrientation: ORIENTATIONS.PORTRAIT,
  lockOrientation() {},
};

export const OrientationContext = createContext<IOrientationProvider>(
  OrientationProviderDefaults
);
