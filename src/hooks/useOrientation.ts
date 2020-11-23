import { useContext } from 'react';
import { OrientationContext, ORIENTATIONS } from 'contexts';

export default function useOrientation(): IOrientationInfo {
  const { currentOrientation } = useContext(OrientationContext);

  return {
    orientation: currentOrientation,
    '@landscape': currentOrientation === ORIENTATIONS.LANDSCAPE,
    '@portrait': currentOrientation === ORIENTATIONS.PORTRAIT,
  };
}
