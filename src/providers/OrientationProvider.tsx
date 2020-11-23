import React, {
  useCallback,
  useEffect,
  useState,
  ReactElement,
} from 'react';

import Orientation from 'react-native-orientation-locker';
import { OrientationContext, ORIENTATIONS } from '../contexts';

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

  const setOrientationListener= (newOrientation): void => {
    if (newOrientation) setOrientation(ORIENTATIONS[newOrientation]);
  };

  useEffect(() => {
    Orientation.addDeviceOrientationListener(setOrientationListener);
    Orientation.addOrientationListener(setOrientationListener);
    return ():void=>{
      Orientation.removeAllListeners();
    };
  }, []);

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
