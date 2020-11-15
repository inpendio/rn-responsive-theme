import React, { createContext, useCallback, useEffect, useState } from 'react';
import Orientation from "react-native-orientation-locker";
import { IBasicProviderProps, IOrientationProvider } from './types';

enum ORIENTATIONS {
    PORTRAIT = 'portrait',
    LANDSCAPE = 'landscape'
}

export const OrientationProviderDefaults: IOrientationProvider = {
    currentOrientation: ORIENTATIONS.PORTRAIT,
    lockOrientation() { },
}

export const OrientationContext = createContext<IOrientationProvider>(OrientationProviderDefaults);




export default function OrientationProvider({ children }: IBasicProviderProps) {
    const [currentOrientation, setOrientation] = useState(ORIENTATIONS.PORTRAIT);
    const lockOrientation = useCallback((mode) => {
        if (!mode) return;
        else if (ORIENTATIONS[mode] === ORIENTATIONS.LANDSCAPE) Orientation.lockToLandscape();
        else if (ORIENTATIONS[mode] === ORIENTATIONS.PORTRAIT) Orientation.lockToPortrait();
    }, []);


    const _setOrientationListener = (newOrientation): void => {
        if (newOrientation) setOrientation(ORIENTATIONS[newOrientation]);
    }

    useEffect(() => {
        Orientation.addOrientationListener(_setOrientationListener);
        return Orientation.removeAllListeners();
    }, [])

    return (
        <OrientationContext.Provider value={{
            currentOrientation, lockOrientation
        }}>
            {children}
        </OrientationContext.Provider>
    )
}
