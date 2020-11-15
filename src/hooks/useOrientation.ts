import { useContext } from 'react';
import {
  OrientationContext,
  ORIENTATIONS,
} from '../providers/OrientationProvider';

export interface IOrientationInfo {
  orientation?: string;
  '@landscape': boolean;
  '@portrait': boolean;
}

export default function useOrientation(): IOrientationInfo {
  const { currentOrientation } = useContext(OrientationContext);

  return {
    orientation: currentOrientation,
    '@landscape': currentOrientation === ORIENTATIONS.LANDSCAPE,
    '@portrait': currentOrientation === ORIENTATIONS.PORTRAIT,
  };
}
