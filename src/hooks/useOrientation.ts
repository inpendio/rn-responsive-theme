import { useContext /* ,useState,useEffect */ } from 'react';
import { OrientationContext, ORIENTATIONS } from '../contexts';
// import {
//   OrientationContext,
//   ORIENTATIONS,
// } from '../providers/OrientationProvider';

// export interface IOrientationInfo {
//   orientation?: string;
//   '@landscape': boolean;
//   '@portrait': boolean;
// }
/// * (typeof ORIENTATIONS) */ORIENTATIONS[keyof typeof ORIENTATIONS];

// type OrientationInfo = ORIENTATIONS[0] | ORIENTATIONS[1];

export default function useOrientation(): IOrientationInfo {
  const { currentOrientation } = useContext(OrientationContext);

  return {
    orientation: currentOrientation,
    '@landscape': currentOrientation === ORIENTATIONS.LANDSCAPE,
    '@portrait': currentOrientation === ORIENTATIONS.PORTRAIT,
  };
}
