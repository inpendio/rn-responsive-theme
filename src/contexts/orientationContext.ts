import { createContext } from 'react';

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
