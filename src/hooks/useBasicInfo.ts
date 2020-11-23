import { useState, useEffect, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { BasicContext } from '../contexts';

export default function useBasicInfo(): IBasicInfo {
  const { width, height, OS, isXs, isTablet } = useContext(BasicContext);
  const systemTheme = useColorScheme() || 'light';
  const [basicInfo, setBasicInfo] = useState<IBasicInfo>({
    '@android': OS === 'android',
    '@ios': OS === 'ios',
    '@web': OS === 'web',
    '@tablet': isTablet,
    '@xs': isXs,
    width,
    height,
    systemTheme,
  });

  useEffect(() => {
    setBasicInfo({
      '@android': OS === 'android',
      '@ios': OS === 'ios',
      '@web': OS === 'web',
      '@tablet': isTablet,
      '@xs': isXs,
      width,
      height,
      systemTheme,
    });
  }, [width, height, OS, isXs, isTablet, systemTheme]);

  return basicInfo;
}
