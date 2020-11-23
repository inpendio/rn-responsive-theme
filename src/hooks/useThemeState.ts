import { useEffect, useState } from 'react';
import useBasicInfo from './useBasicInfo';
import useOrientation from './useOrientation';

const useResponsive = (): IResponsiveState => {
  const basicInfo = useBasicInfo();
  const { orientation, ...orientationThemeState } = useOrientation();
  const [themeState, setThemeState] = useState<IResponsiveState>({
    ...basicInfo,
    ...orientationThemeState,
  });

  useEffect(() => {
    setThemeState({
      ...basicInfo,
      ...orientationThemeState,
    });
  }, [orientation]);

  return themeState;
};

export default useResponsive;
