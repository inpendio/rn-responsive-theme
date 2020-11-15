import React, { ReactElement } from 'react';
import { IProviderProps, IOrientationProvider } from './types';
export declare enum ORIENTATIONS {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape",
    'PORTRAIT-UPSIDEDOWN' = "portrait",
    'LANDSCAPE-LEFT' = "landscape",
    'LANDSCAPE-RIGHT' = "landscape"
}
export declare const OrientationProviderDefaults: IOrientationProvider;
export declare const OrientationContext: React.Context<IOrientationProvider>;
export default function OrientationProvider({ children, }: IProviderProps): ReactElement;
