import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  ReactElement,
} from 'react';

import Orientation from 'react-native-orientation-locker';
import { IProviderProps, IOrientationProvider } from './types';

export enum ORIENTATIONS {
    PORTRAIT = 'portrait',
    LANDSCAPE = 'landscape',
    'PORTRAIT-UPSIDEDOWN'='portrait',
    'LANDSCAPE-LEFT'='landscape',
    'LANDSCAPE-RIGHT'='landscape'

}

export const OrientationProviderDefaults: IOrientationProvider = {
  currentOrientation: ORIENTATIONS.PORTRAIT,
  lockOrientation() { },
};

export const OrientationContext = createContext<IOrientationProvider>(
  OrientationProviderDefaults
);

export default function OrientationProvider({
  children,
}: IProviderProps): ReactElement {
  const [currentOrientation, setOrientation] = useState(ORIENTATIONS.PORTRAIT);
  const lockOrientation = useCallback(mode => {
    if (!mode) return;
    if (ORIENTATIONS[mode] === ORIENTATIONS.LANDSCAPE)
      Orientation.lockToLandscape();
    else if (ORIENTATIONS[mode] === ORIENTATIONS.PORTRAIT)
      Orientation.lockToPortrait();
  }, []);

  const setOrientationListener = (newOrientation): void => {
    if (newOrientation) setOrientation(ORIENTATIONS[newOrientation]);
  };

  useEffect(() => {
    Orientation.getDeviceOrientation(setOrientationListener);
    Orientation.addOrientationListener(setOrientationListener);
    return Orientation.removeAllListeners();
  }, []);

  console.log({ currentOrientation });

  return (
    <OrientationContext.Provider
      value={{
        currentOrientation,
        lockOrientation,
      }}
    >
      {children}
    </OrientationContext.Provider>
  );
}
