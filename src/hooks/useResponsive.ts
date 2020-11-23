import { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { isEqual, calculateStyle } from 'utils';
import useThemeState from './useThemeState';

const useResponsive = (
  style: object,
  { localStyles }: IResponsiveHookAdditionalArgs
): NamedStyles<any> => {
  const themeState = useThemeState();
  const [currentStyle, setCurrentStyle] = useState(null);

  // Use deep compare of the style object to prevent infinite renders
  const previousStyleRef = useRef<object | null>(null);

  useEffect(() => {
    const newStyle = StyleSheet.create(
      calculateStyle(style, { ...themeState, localStyles })
    );
    const isStyleEqual = isEqual(previousStyleRef.current, newStyle);
    if (!isStyleEqual) {
      setCurrentStyle(newStyle);
      previousStyleRef.current = style;
    }
  }, [themeState, style, localStyles]);

  // Return the calculated styles on the first render
  return currentStyle || StyleSheet.create(calculateStyle(style, themeState));
};

export default useResponsive;
